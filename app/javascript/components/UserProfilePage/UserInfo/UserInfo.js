import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import EmploymentInfo from "../EmploymentInfo/EmploymentInfo";
import { receivedCurrentUser } from "../../../reducers/CurrentUserReducer";
import { userThunk } from "../../../reducers/ViewUserReducer";
import { alreadyConnected } from "../../../reducers/UsersReducer";
import ReactModal from "react-modal";
import ProfileStrength from "./ProfileStrength";
import YourDashboard from "./YourDashboard";

const MainUserWrapper = styled.div`
  background-color: transparent;
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;

  height: 200px;
  width: 550px;
`;

const UseInfoWrapper = styled.div`
  background-color: transparent;
  margin-left: 10px;
  margin-bottom: 10px;
  line-height: 10px;
`;

const Button = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  width: 26%;
  height: 20%;
  display: flex;
  align-items: center;
`;

const ContactInfo = styled.p`
  color: #0a66c2;
  cursor: pointer;
`;

// MODAL

const EditProfileFormWrapper = styled.div`
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
  font-size: 175%;
  line-height: 5px;
`;

const EditModalTitle = styled.h2`
  background-color: #d6cec2;
  font-size: 40px;
`;

const EditModalForm = styled.form`
  width: 50%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 5px;
  border-radius: 15px;
  border: 2px solid #d6cec2;
`;

const ModalButtons = styled.button`
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
`;

const ButtonWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  align-self: center;
`;

const SingleInputWrapper = styled.div`
  background-color: white;
  margin-left: 400px;
  margin-right: 400px;
`;

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const viewUser = useSelector((state) => state.viewUser);
  const connections = useSelector((state) => alreadyConnected(state));
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const editProfileButtonDisable = viewUser.id === currentUser.id && (
    <Button onClick={() => setShowModal(true)}>Edit Profile</Button>
  );

  useEffect(() => {
    setFirstName(currentUser.first_name);
    setLastName(currentUser.last_name);
    setLocation(currentUser.location);
    setTitle(currentUser.title);
    dispatch(userThunk(params.id));
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
            {viewUser.first_name} {viewUser.last_name}
          </h2>
          <p>
            {viewUser.title} in {viewUser.location} * {connections.length}{" "}
            connections
          </p>
          <ContactInfo>Contact Info</ContactInfo>
          {editProfileButtonDisable}
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
              <SingleInputWrapper>
                <h4>First Name</h4>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </SingleInputWrapper>

              <SingleInputWrapper>
                <h4>Last Name</h4>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </SingleInputWrapper>

              <SingleInputWrapper>
                <h4>Location</h4>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </SingleInputWrapper>

              <SingleInputWrapper>
                <h4>Title</h4>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </SingleInputWrapper>

              <ButtonWrapper>
                <span>
                  <ModalButtons type="submit">Save</ModalButtons>
                  <ModalButtons onClick={() => setShowModal(false)}>
                    Exit
                  </ModalButtons>
                </span>
              </ButtonWrapper>
            </EditModalForm>
          </EditProfileFormWrapper>
        </ReactModal>
      </Wrapper>
      <ProfileStrength />
      <YourDashboard />
      <EmploymentInfo />
    </MainUserWrapper>
  );
};
