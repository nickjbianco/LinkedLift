import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { employmentsThunk } from "../../reducers/EmploymentsReducer"; // All employments
import { gymsThunk } from "../../reducers/GymsReducer"; // All gyms
import ReactModal from "react-modal";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: green;
`;

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

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const employments = useSelector((state) => state.employments);
  const gyms = useSelector((state) => state.gyms);
  const [gymName, setGymName] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const myEmployments = employments.filter((employment) => {
    if (employment.userId === currentUser.id) {
      return employment;
    }
  });
  const currentUserGym = gyms.find((gym) => gym.name === gymName);

  useEffect(() => {
    dispatch(employmentsThunk());
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
            user: currentUser,
            gym: currentUserGym,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("login error", error);
      });
    setTitle("");
    setGymName("");
    setShowModal(false);
  };

  return (
    <Wrapper>
      <ul>
        <h1>Previous Gyms</h1>
        <button onClick={() => setShowModal(true)}>Add Gym</button>
        <ReactModal
          isOpen={showModal}
          contentLabel="Add Gym"
          ariaHideApp={false}
          onRequestClose={() => setShowModal(false)}
        >
          <form onSubmit={handleAddEmployment}>
            <h2>Add Gym</h2>
            <p>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </p>
            <p>
              <select
                value={gymName}
                onChange={(e) => setGymName(e.target.value)}
              >
                <option value="">--Select Gym</option>
                {gyms.map((gym) => (
                  <option key={gym.id} value={gym.name}>
                    {gym.name}
                  </option>
                ))}
              </select>
            </p>
            <p>Location</p>
            <p>Start date - end date</p>
            <Button type="submit">Save</Button>
          </form>
        </ReactModal>
        {myEmployments.map((myEmployment) => (
          <ul key={myEmployment.id}>
            <h3>{myEmployment.title}</h3>
            <p>{myEmployment.gymName}</p>
            <p>start date - end date</p>
            <p>{myEmployment.gymLocation}</p>
            <hr />
          </ul>
        ))}
      </ul>
    </Wrapper>
  );
};
