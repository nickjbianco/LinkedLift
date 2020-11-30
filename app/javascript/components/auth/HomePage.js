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
`;

const Register = styled.div`
  background-color: #f3f2ef;
`;

const LoginInput = styled.div`
  background-color: #f3f2ef;
`;

export default (props) => {
  const handleSuccessfulAuth = (data) => {
    props.handleLogIn(data);
    props.history.push("/");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogOut();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  return (
    <Wrapper>
      <h1>Linkedlift</h1>
      <Register>
        <h3>Don't have an account? Sign up below.</h3>
        <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      </Register>
      <LoginInput>
        <h3>Already have an account? Login below.</h3>
        <Login handleSuccessfulAuth={handleSuccessfulAuth} />
      </LoginInput>
    </Wrapper>
  );
};
