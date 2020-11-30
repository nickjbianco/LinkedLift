import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk, alreadyConnected } from "../../reducers/UsersReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 20%;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-top: 20px;
  text-align: center;
  width: 350px;
  height: 150px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export default () => {
  const dispatch = useDispatch();
  const allConnections = useSelector(alreadyConnected);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  return (
    <Wrapper>
      <h1>My Network</h1>
      <p>Connections: {allConnections.length}</p>
    </Wrapper>
  );
};
