import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { receivedCurrentUser } from "../../reducers/CurrentUserReducer";
import axios from "axios";
import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
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
  padding: 2px;
  width: 163px;
`;

const FormInput = styled.div`
  margin: 7px;
`;

const Input = styled.input`
  padding: 5px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

export default (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [registrationErrors, setregistrationErrors] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/registrations",
        {
          user: {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          props.handleSuccessfulAuth(response.data);
          dispatch(receivedCurrentUser(response.data.user));
        }
      })
      .catch((error) => {
        console.log("registrarion error", error);
      });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <FormInput>
            <Input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormInput>

          <FormInput>
            <Input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormInput>

          <FormInput>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormInput>

          <FormInput>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormInput>

          <FormInput>
            <Input
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </FormInput>

          <FormInput>
            <p>
              <em>By clicking Agree & Join, you agree to the LinkedLift</em>
            </p>
            <p>
              <em>User Agreement, Privacy Policy, and Cookie Policy.</em>
            </p>
            <Button type="submit">Agree & Join</Button>
          </FormInput>
        </FormWrapper>
      </form>
    </FormWrapper>
  );
};
