import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactModal from "react-modal";
import styled from "styled-components";
import EmploymentInfo from "./EmploymentInfo";

const Wrapper = styled.div`
  display: flex;
  background-color: blue;
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
  const currentUser = useSelector((state) => state.currentUser);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(currentUser);
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Wrapper>
        <ul>
          <h1>User info</h1>
          <p>
            {currentUser.first_name} {currentUser.last_name}
          </p>
          <p>{currentUser.title}</p>
          <p>{currentUser.location}</p>
          <button onClick={handleOpenModal}>Edit Profile</button>
          <ReactModal isOpen={showModal} contentLabel="Edit Profile">
            <form onSubmit={handleCloseModal}>
              <ul>
                <p>
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </p>
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
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </p>
                <p>
                  <Button>Save</Button>
                </p>
              </ul>
            </form>
          </ReactModal>
        </ul>
      </Wrapper>
      <EmploymentInfo />
    </div>
  );
};
