import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactModal from "react-modal";
import { YearPicker } from "react-dropdown-date";
import { addEmployment } from "../../../reducers/EmploymentsReducer";
import { gymsThunk } from "../../../reducers/GymsReducer";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
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

const AddGymFormWrapper = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const AddEmploymentButton = styled.button`
  width: 100%;
  background-color: white;
`;

export default () => {
  const dispatch = useDispatch();
  const gyms = useSelector((state) => state.gyms);
  const [gymId, setGymId] = useState(undefined);
  const [title, setTitle] = useState("");
  const [startMonth, setStartMonth] = useState(undefined);
  const [startYear, setStartYear] = useState(2020);
  const [endMonth, setEndMonth] = useState(undefined);
  const [endYear, setEndYear] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
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
            end_date: `${endYear}-${endMonth}-01`,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(addEmployment(response.data));
        setTitle("");
        setGymId(undefined);
        setStartMonth(undefined);
        setStartYear(2020);
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
      <AddEmploymentButton onClick={() => setShowModal(true)}>
        Add Gym
      </AddEmploymentButton>
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
