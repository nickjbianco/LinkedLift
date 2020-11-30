import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { receivedCurrentUser } from "../../reducers/CurrentUserReducer";
import axios from "axios";
import styled from "styled-components";

const FormWrapper = styled.ul``;

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
        "http://localhost:3000/registrations",
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
    <div>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <div>
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              name="password_confirmation"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          <div>
            <p>
              <em>By clicking Agree & Join, you agree to the LinkedLift</em>
            </p>
            <p>
              <em>User Agreement, Privacy Policy, and Cookie Policy.</em>
            </p>
            <button type="submit">Agree & Join</button>
          </div>
        </FormWrapper>
      </form>
    </div>
  );
};
