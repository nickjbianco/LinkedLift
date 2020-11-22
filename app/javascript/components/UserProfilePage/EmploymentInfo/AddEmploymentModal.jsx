import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import { YearPicker } from "react-dropdown-date";
import { addEmployment } from "../../../reducers/EmploymentsReducer";
import { gymsThunk } from "../../../reducers/GymsReducer";
import { userThunk } from "../../../reducers/ViewUserReducer";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  width: 50%;
  height: 50%;
  padding: 0;
  font-size: 100%;
  cursor: pointer;
  margin-top: 30px;
  margin-left: 8px;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const AddGymFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const Experience = styled.h2`
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  width: 100%;
`;

const EmploymentFeedTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LineBreak = styled.hr`
  width: 120%;
  margin-top: 16px;
`;

export default () => {
  const dispatch = useDispatch();
  const params = useParams();
  const gyms = useSelector((state) => state.gyms);
  const currentUser = useSelector((state) => state.currentUser);
  const viewUser = useSelector((state) => state.viewUser);
  const [gymId, setGymId] = useState(undefined);
  const [title, setTitle] = useState("");
  const [startMonth, setStartMonth] = useState(undefined);
  const [startYear, setStartYear] = useState(undefined);
  const [endMonth, setEndMonth] = useState(undefined);
  const [endYear, setEndYear] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
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
  const addGymButtonDisable = viewUser.id === currentUser.id && (
    <Button onClick={() => setShowModal(true)}>Add Gym</Button>
  );

  useEffect(() => {
    dispatch(gymsThunk());
    dispatch(userThunk(params.id));
  }, []);

  const handleAddEmployment = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/employments",
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
        dispatch(addEmployment(response.data));
        setTitle("");
        setGymId(undefined);
        setStartMonth(undefined);
        setStartYear(undefined);
        setEndMonth(undefined);
        setEndYear(undefined);
        setShowModal(false);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <EmploymentFeedTitle>
        <Experience>Previous Gyms</Experience>
        {addGymButtonDisable}
      </EmploymentFeedTitle>
      <LineBreak />
      <ReactModal
        isOpen={showModal}
        contentLabel="Add Gym"
        ariaHideApp={false}
        onRequestClose={() => setShowModal(false)}
      >
        <AddGymFormWrapper>
          <form onSubmit={handleAddEmployment}>
            <h2>Add Gym</h2>
            <p>
              <em>* Required fields.</em>
            </p>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
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
              <span>*</span>
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
              <span>*</span>
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
              <span> -- If still at current gym leave this area blank.</span>
            </div>
            <Button type="submit">Save</Button>
          </form>
        </AddGymFormWrapper>
      </ReactModal>
    </div>
  );
};
