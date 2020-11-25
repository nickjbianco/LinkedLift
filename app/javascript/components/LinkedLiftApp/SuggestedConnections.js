import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk } from "../../reducers/UsersReducer";
import { Link } from "react-router-dom";
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
`;

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  return (
    <div>
      <h1>Suggested Conncetions</h1>
      {allUsers
        .filter((user) => user.id !== currentUser.id)
        .map((user) => {
          const suggestedUserFullName = `${user.first_name} ${user.last_name}`;
          return (
            <ul key={user.id}>
              <Link to={`/profile/${user.id}`}>
                <h3>{suggestedUserFullName}</h3>
              </Link>
              <p>{user.title}</p>
              <Button onClick={() => console.log("connected")}>Connect</Button>
            </ul>
          );
        })
        .slice(0, 5)}
    </div>
  );
};
