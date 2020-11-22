import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { YearPicker } from "react-dropdown-date";
import { gymsThunk } from "../../../reducers/GymsReducer";
import { editEmployment } from "../../../reducers/EmploymentsReducer";
import { userThunk } from "../../../reducers/ViewUserReducer";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  padding: 0;
  font-size: 100%;
  cursor: pointer;
  margin-left: 8px;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const EmploymentsFeed = styled.form`
  display: flex;
  flex-direction: reverse-row;
`;

export default (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const gyms = useSelector((state) => state.gyms);
  const currentUser = useSelector((state) => state.currentUser);
  const viewUser = useSelector((state) => state.viewUser);
  const currentEmployment = props.currentEmployment;
  const [title, setTitle] = useState("");
  const [gymId, setGymId] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  const [startMonth, setStartMonth] = useState(undefined);
  const [startYear, setStartYear] = useState(undefined);
  const [endMonth, setEndMonth] = useState(undefined);
  const [endYear, setEndYear] = useState(undefined);
  const editGymButtonDisable = viewUser.id === currentUser.id && (
    <Button onClick={() => setShowModal(true)}>Edit Gym</Button>
  );
  const fullEndDate =
    endMonth && endYear ? `${endYear}-${endMonth}-01` : undefined;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    dispatch(gymsThunk());
    setTitle(currentEmployment.title);
    setGymId(currentEmployment.gymId);
    setStartMonth(months.indexOf(currentEmployment.startMonth) + 1);
    setStartYear(currentEmployment.startYear);
    setEndMonth(months.indexOf(currentEmployment.endMonth) + 1);
    setEndYear(currentEmployment.endYear);
    dispatch(userThunk(params.id));
  }, []);

  const handleCloseModal = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:3000/employments/${currentEmployment.id}`,
        {
          employment: {
            title,
            gym_id: gymId,
            start_date: `${startYear}-${startMonth}-01`,
            end_date: fullEndDate,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(editEmployment(response.data));
        setShowModal(false);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <span>
        {editGymButtonDisable}
        <ReactModal
          isOpen={showModal}
          contentLabel="Add Gym"
          ariaHideApp={false}
          onRequestClose={() => setShowModal(false)}
        >
          <EmploymentsFeed onSubmit={handleCloseModal}>
            <h2>Edit Previous Gym</h2>
            <div>
              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <select value={gymId} onChange={(e) => setGymId(e.target.value)}>
                <option value="">--Select Gym</option>
                {gyms.map((gym) => (
                  <option key={gym.id} value={gym.id}>
                    {gym.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                <option value="">--Select Start Month</option>
                {months.map((month, idx) => (
                  <option key={month} value={idx + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <YearPicker
                value={startYear}
                onChange={(year) => setStartYear(year)}
                defaultValue={"--Select Start Year"}
                start={1990}
                end={2020}
              />
            </div>
            <div>
              <select
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                <option value="">--Select End Month</option>
                {months.map((month, idx) => (
                  <option key={month} value={idx + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <YearPicker
                value={endYear}
                onChange={(year) => setEndYear(year)}
                defaultValue={"--Select End Year"}
                start={1990}
                end={2020}
              />
            </div>
            <button type="submit">Save</button>
          </EmploymentsFeed>
        </ReactModal>
      </span>
    </div>
  );
};
