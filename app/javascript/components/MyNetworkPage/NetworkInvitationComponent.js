import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk, alreadyConnected } from "../../reducers/UsersReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: blue;
  width: 50%;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-top: 20px;
`;

const SingleSuggestedConnection = styled.ul`
  background-color: orange;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  width: 50%;
  margin-left: 225px;
  text-align: center;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 30%;
`;

const ComponentTitle = styled.h1`
  background-color: green;
  text-align: center;
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

export default () => {
  const dispatch = useDispatch();
  const allConnections = useSelector(alreadyConnected);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  return (
    <Wrapper>
      <ComponentTitle>Lifters in Network</ComponentTitle>
      {allConnections.map((user) => {
        const fullName = `${user.first_name} ${user.last_name}`;

        return (
          <SingleSuggestedConnection key={user.id}>
            <h4>{fullName}</h4>
            <p>{user.title}</p>
            <p>{user.location}</p>
          </SingleSuggestedConnection>
        );
      })}
    </Wrapper>
  );
};
