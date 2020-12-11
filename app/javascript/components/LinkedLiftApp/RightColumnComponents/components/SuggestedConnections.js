import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  usersThunk,
  suggestedConnections,
  receivedConnection,
} from "../../../../reducers/UsersReducer";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--blue-70, #0073b1);
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  padding: 0;
  font-size: 100%;
  cursor: pointer;
  margin-left: 8px;
  line-height: 8px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: 2px;
  font-szie: 12;
  height: 30%;
`;

const SuggestedConnections = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 5px 0px 12px 0px;
  margin-top: 24px;
  width: 216px;
  border: solid;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  font-szie: 12;
`;

const SuggestedConnectionsTitle = styled.p`
  font-size: 16px;
  display: flex;
  align-self: flex-start;
  padding-left: 10px;
`;

const ConnectionInfo = styled.ul`
  background-color: white;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  line-height: 1000px;
`;

const ButtonWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  align-items: center;
`;

const ConnectionUserInfo = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  line-height: 5px;
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
    <SuggestedConnections>
      <SuggestedConnectionsTitle>
        <b>Suggested Connections</b>
      </SuggestedConnectionsTitle>
      {allUsers.map((user) => {
        const suggestedUserFullName = `${user.first_name} ${user.last_name}`;
        return (
          <ConnectionInfo key={user.id}>
            <ConnectionUserInfo>
              <Link to={`/profile/${user.id}`}>
                <p>
                  <b>{suggestedUserFullName}</b>
                </p>
              </Link>
              <p>{user.title}</p>
            </ConnectionUserInfo>
            <ButtonWrapper>
              <Button onClick={(e) => handleConnectUsers(e, user.id)}>
                Connect
              </Button>
            </ButtonWrapper>
          </ConnectionInfo>
        );
      })}
    </SuggestedConnections>
  );
};
