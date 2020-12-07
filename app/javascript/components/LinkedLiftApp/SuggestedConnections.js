import React, { useEffect } from "react";
import NewsFeed from "./NewsFeed";
import { useSelector, useDispatch } from "react-redux";
import {
  usersThunk,
  suggestedConnections,
  receivedConnection,
} from "../../reducers/UsersReducer";
import { Link } from "react-router-dom";
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
  padding: 2px;
`;

const SuggestedConnections = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 0;
  padding: 5px 40px 12px 16px;
  margin-top: 24px;
  width: 60%;
  border: solid;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
  width: calc(100% - 48px);
  margin: 8px -8px 8px 64px;
`;

export default () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(suggestedConnections);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  const handleConnectUsers = (e, connectedUserId) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/user_connections",
        {
          user_connection: { connected_user_id: connectedUserId },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(receivedConnection(response.data));
      })
      .catch((error) => {
        console.log("connection error", error);
      });
  };

  return (
    <div>
      <NewsFeed />
      <SuggestedConnections>
        <h1>Suggested Connections</h1>
        {allUsers.map((user) => {
          const suggestedUserFullName = `${user.first_name} ${user.last_name}`;
          return (
            <ul key={user.id}>
              <Link to={`/profile/${user.id}`}>
                <h3>{suggestedUserFullName}</h3>
              </Link>
              <p>{user.title}</p>
              <Button onClick={(e) => handleConnectUsers(e, user.id)}>
                Connect
              </Button>
              <BottomLine />
            </ul>
          );
        })}
      </SuggestedConnections>
    </div>
  );
};
