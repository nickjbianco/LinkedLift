import React from "react";
import { peopleAlsoViewed } from "../../../reducers/UsersReducer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { receivedConnection } from "../../../reducers/UsersReducer";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const PeopleAlsoViewedTitle = styled.p`
  font-size: 20px;
  color: #000000e6;
  margin-top: 10px;
  margin-left: 10px;
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

const AlsoViewedUser = styled.ul`
  line-height: 10px;
  font-weight: 600;
`;

const UserFullName = styled.div`
  font-size: 16px;
  color: #000000e6;
`;

const UserTitle = styled.div`
  font-size: 14px;
  color: #000000e6;
`;

export default () => {
  const alsoViewedUsers = useSelector(peopleAlsoViewed);
  const dispatch = useDispatch();

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
    <Wrapper>
      <PeopleAlsoViewedTitle>People also viewed</PeopleAlsoViewedTitle>
      {alsoViewedUsers.map((user) => {
        const fullName = `${user.first_name} ${user.last_name}`;

        return (
          <AlsoViewedUser key={user.id}>
            <UserFullName>
              <Link to={`/profile/${user.id}`}>
                <b>
                  <p>{fullName}</p>
                </b>
              </Link>
            </UserFullName>
            <UserTitle>
              <p>{user.title}</p>
            </UserTitle>
            <ConnectButton onClick={(e) => handleConnectUsers(e, user.id)}>
              connect
            </ConnectButton>
            <hr />
          </AlsoViewedUser>
        );
      })}
    </Wrapper>
  );
};
