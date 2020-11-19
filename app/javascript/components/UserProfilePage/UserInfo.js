import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactModal from "react-modal";
import styled from "styled-components";
import EmploymentInfo from "./EmploymentInfo/EmploymentInfo";
import { receivedCurrentUser } from "../../reducers/CurrentUserReducer";
import "./UserInfo.scss";

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 24px !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  padding: 20px;
  width: 150%;
  height: 150px;
`;

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

const EditProfileFormWrapper = styled.div`
  background-color: white;
  width: 50%;
  margin-left: 25%;
  padding-bottom: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 150%;
`;

const UseInfoWrapper = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const MainUserWrapper = styled.div`
  width: 20%;
`;

const EditModalTitle = styled.h2`
  background-color: #788fa5;
  font-size: 20px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`;

const EditModalForm = styled.form`
  background-color: red;
  display: flex;
  flex-direction: column;
`;

const EditModalInput = styled.input`
  background-color: green;
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
    <MainUserWrapper>
      <Wrapper>
        <UseInfoWrapper>
          <h2>
            {currentUser.first_name} {currentUser.last_name}
          </h2>
          <p>
            {currentUser.title} in {currentUser.location}
          </p>
          <Button onClick={() => setShowModal(true)}>Edit Profile</Button>
        </UseInfoWrapper>
        <ReactModal
          isOpen={showModal}
          contentLabel="Edit Profile"
          className="edit-modal"
          ariaHideApp={false}
          onRequestClose={() => setShowModal(false)}
        >
          <EditProfileFormWrapper>
            <EditModalTitle>Edit Profile Info</EditModalTitle>
            <EditModalForm onSubmit={handleCloseModal}>
              <p>
                <p>First Name</p>
                <EditModalInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </p>

              <p>
                <p>Last Name</p>
                <EditModalInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </p>
              <p>
                <p>Location</p>
                <EditModalInput
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </p>
              <p>
                <p>Title</p>
                <EditModalInput
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </p>
              <span>
                <Button type="submit">Save</Button>
                <Button onClick={() => setShowModal(false)}>Close</Button>
              </span>
            </EditModalForm>
          </EditProfileFormWrapper>
        </ReactModal>
      </Wrapper>
      <EmploymentInfo />
    </MainUserWrapper>
  );
};
