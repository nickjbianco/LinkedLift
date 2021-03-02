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
  padding: 2px;
`;

const EditEmploymentModalForm = styled.form`
  background-color: white;
  display: flex;
  padding: 20px;
  flex-direction: column;
  border-radius: 15px;
  border: 2px solid #d6cec2;
`;

const ButtonWrapper = styled.div`
  background-color: white;
  padding-top: 20px;
  display: flex;
  align-self: center;
`;

const EditModalTitle = styled.div`
  background-color: #d6cec2;
  font-size: 40px;
`;

const EditEmploymentWrapper = styled.div`
  background-color: #d6cec2;
  width: 50%;
  margin-left: 25%;
  margin-top: 100px;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 175%;
`;

const SingleEditInput = styled.div`
  line-height: 5px;
`;

const EditGymButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  width: 17%;
  height: 40%;
  display: flex;
  align-items: center;
  align-self: center;
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
    <EditGymButton onClick={() => setShowModal(true)}>Edit Gym</EditGymButton>
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
        `/api/employments/${currentEmployment.id}`,
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
      });
    // .catch((error) => {
    //   console.log("login error", error);
    // });
  };

  return (
    <div>
      {editGymButtonDisable}
      <ReactModal
        isOpen={showModal}
        contentLabel="Add Gym"
        ariaHideApp={false}
        onRequestClose={() => setShowModal(false)}
      >
        <EditEmploymentWrapper>
          <EditModalTitle>
            <h2>Edit Previous Gym</h2>
          </EditModalTitle>
          <EditEmploymentModalForm onSubmit={handleCloseModal}>
            <SingleEditInput>
              <h4>Title</h4>
              <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </SingleEditInput>
            <SingleEditInput>
              <h4>Gym Name</h4>
              <select value={gymId} onChange={(e) => setGymId(e.target.value)}>
                <option value="">--Select Gym</option>
                {gyms.map((gym) => (
                  <option key={gym.id} value={gym.id}>
                    {gym.name}
                  </option>
                ))}
              </select>
            </SingleEditInput>
            <SingleEditInput>
              <h4>Start Date</h4>
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
            </SingleEditInput>
            <SingleEditInput>
              <h4>End Date</h4>
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
            </SingleEditInput>
            <ButtonWrapper>
              <Button type="submit">Save</Button>
              <Button onClick={() => setShowModal(false)}>Exit</Button>
            </ButtonWrapper>
          </EditEmploymentModalForm>
        </EditEmploymentWrapper>
      </ReactModal>
    </div>
  );
};
