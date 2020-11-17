import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactModal from "react-modal";
import styled from "styled-components";
import EmploymentInfo from "./EmploymentInfo/EmploymentInfo";
import { receivedCurrentUser } from "../../reducers/CurrentUserReducer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const EditProfileButton = styled.button`
  width: 40%;
  background-color: white;
`;

const EditProfileFormWrapper = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFirstName(currentUser.first_name);
    setLastName(currentUser.last_name);
    setLocation(currentUser.location);
    setTitle(currentUser.title);
  }, [currentUser]);

  const handleCloseModal = (e) => {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:3000/users/${currentUser.id}`,
        {
          user: {
            first_name: firstName,
            last_name: lastName,
            location,
            title,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(receivedCurrentUser(response.data));
        setShowModal(false);
      })
      .catch((error) => {
        console.log("login error", error);
      });
  };

  return (
    <div>
      <Wrapper>
        <h2>
          {currentUser.first_name} {currentUser.last_name}
        </h2>
        <p>
          {currentUser.title} in {currentUser.location}
        </p>
        <EditProfileButton onClick={() => setShowModal(true)}>
          Edit Profile
        </EditProfileButton>
        <ReactModal
          isOpen={showModal}
          contentLabel="Edit Profile"
          ariaHideApp={false}
          onRequestClose={() => setShowModal(false)}
        >
          <EditProfileFormWrapper>
            <form onSubmit={handleCloseModal}>
              <h2>Edit Profile Info</h2>
              <p>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </p>
              <p>
                <Button type="submit">Save</Button>
              </p>
            </form>
          </EditProfileFormWrapper>
        </ReactModal>
      </Wrapper>
      <EmploymentInfo />
    </div>
  );
};
