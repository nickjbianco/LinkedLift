import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { receivedCurrentUser } from "../../reducers/CurrentUserReducer";
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
  -webkit-font-smoothing: antialiased;
  margin-top: 10px;
  padding: 2px;
`;

const FormWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.div`
  margin: 7px;
`;

export default (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
          dispatch(receivedCurrentUser(response.data.user));
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormInput>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormInput>

        <FormInput>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormInput>

        <FormInput>
          <Button type="submit">Login</Button>
          <Button onClick={() => console.log("create demo user")}>
            Demo User
          </Button>
        </FormInput>
      </form>
    </FormWrapper>
  );
};
