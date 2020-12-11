import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  usersThunk,
  suggestedConnections,
  receivedConnection,
} from "../../../reducers/UsersReducer";
import styled from "styled-components";
import axios from "axios";
import AdvancedProfileTools from "./AdvancedProfileTools";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  margin-top: 30px;
  border: solid;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  margin-left: 20px;
  width: 350px;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
`;

const SuggestedUserInfo = styled.ul`
  line-height: 10px;
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
`;

const ConnectButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  width: 24%;
  height: 40%;
  display: flex;
  align-items: center;
  align-self: center;
`;

const Title = styled.p`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;

const SuggestedConnectionName = styled.p`
  font-size: 16px;
`;

export default () => {
  const dispatch = useDispatch();
  const suggestedUsers = useSelector(suggestedConnections);

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
      <AdvancedProfileTools />
      <Wrapper>
        <Title>People You May Know</Title>
        {suggestedUsers.map((suggestedUser) => (
          <SuggestedUserInfo key={suggestedUser.id}>
            <div>
              <Link to={`/profile/${suggestedUser.id}`}>
                <SuggestedConnectionName>
                  <b>
                    {suggestedUser.first_name} {suggestedUser.last_name}
                  </b>
                </SuggestedConnectionName>
              </Link>
              <p>{suggestedUser.title}</p>
            </div>

            <div>
              <ConnectButton
                onClick={(e) => handleConnectUsers(e, suggestedUser.id)}
              >
                Connect
              </ConnectButton>
            </div>

            <BottomLine />
          </SuggestedUserInfo>
        ))}
      </Wrapper>
    </div>
  );
};
