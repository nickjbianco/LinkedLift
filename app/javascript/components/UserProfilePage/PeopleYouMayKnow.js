import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk, suggestedConnections } from "../../reducers/UsersReducer";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 24px 40px 12px 16px;
  margin-top: 24px;
  width: 20%;
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

const SuggestedUserInfo = styled.ul`
  line-height: 1.33333;
  font-weight: 600;
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
  const suggestedUsers = useSelector(suggestedConnections);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  const handleConnectUsers = (connectedUserId) => {
    axios
      .post(
        "http://localhost:3000/user_connections",
        {
          user_connection: { connected_user_id: connectedUserId },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("connection response", response);
      })
      .catch((error) => {
        console.log("connection error", error);
      });
  };

  return (
    <Wrapper>
      <h1>People You May Know</h1>
      {suggestedUsers.map((suggestedUser) => (
        <SuggestedUserInfo key={suggestedUser.id}>
          <Link to={`/profile/${suggestedUser.id}`}>
            <h4>
              {suggestedUser.first_name} {suggestedUser.last_name}
            </h4>
          </Link>
          <p>{suggestedUser.title}</p>
          <Button onClick={() => handleConnectUsers(suggestedUser.id)}>
            Connect
          </Button>
          <BottomLine />
        </SuggestedUserInfo>
      ))}
    </Wrapper>
  );
};
