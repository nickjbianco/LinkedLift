import React from "react";
import axios from "axios";
import Registration from "./Registration";
import Login from "./Login";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f3f2ef;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  height: 1000px;
`;

const Register = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  width: 40%;
  display: flex;
  align-self: center;
  flex-direction: column;
  padding-bottom: 20px;
`;

const LoginInput = styled.div`
  background-color: white;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  width: 40%;
  display: flex;
  align-self: center;
  flex-direction: column;
  padding-bottom: 20px;
  margin-top: 2.5%;
`;

const LinkedLift = styled.h1`
  padding: 5px 5px;
  width: 410px;
  background-color: #0a66c2;
  color: white;
  font-size: 5.6rem;
  display: flex;
  align-self: center;
  border-radius: 15px;
  border: 2px solid #0a66c2;
`;

export default (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogIn(data);
    props.history.push("/home");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/api/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogOut();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  return (
    <Wrapper>
      <LinkedLift>LinkedLift</LinkedLift>
      <Register>
        <h2>Don't have an account? Sign up below.</h2>
        <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      </Register>
      <LoginInput>
        <h2>Already have an account? Login below.</h2>
        <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      </LoginInput>
    </Wrapper>
  );
};
