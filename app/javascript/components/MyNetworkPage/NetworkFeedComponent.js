import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  usersThunk,
  alreadyConnected,
  deleteConnection,
} from "../../reducers/UsersReducer";
import axios from "axios";
import styled from "styled-components";
import Survey from "./Survey";
import PendingInvitations from "./PendingInvitations";

const Wrapper = styled.div`
  background-color: white;
  width: 610px;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin-left: 12px;
`;

const SingleSuggestedConnection = styled.ul`
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  width: 19%;
  line-height: 1px;

  font-size: 12px;
  color: #00000099;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: 30px;
  padding-bottom: 10px;
`;

const ComponentTitle = styled.p`
  background-color: transparent;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 16px;
  color: #000000e6;
`;

const RemoveConnectionButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  width: 130%;
  height: 20%;
`;

const NetworkFeed = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default () => {
  const dispatch = useDispatch();
  const allConnections = useSelector(alreadyConnected);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  const handleDeleteConnection = (e, connectedUserId) => {
    e.preventDefault();
    axios
      .delete(
        `http://localhost:3000/user_connections/${connectedUserId}`,
        {
          user_connection: { connected_user_id: connectedUserId },
        },
        { withCredentials: true }
      )
      .then((response) => {
        dispatch(deleteConnection(connectedUserId));
      })
      .catch((error) => {
        console.log("delete connection error", error);
      });
  };

  return (
    <div>
      <Survey />
      <PendingInvitations />
      <Wrapper>
        <ComponentTitle>
          <b>Lifters in Network</b>
        </ComponentTitle>
        <NetworkFeed>
          {allConnections.map((user) => {
            const fullName = `${user.first_name} ${user.last_name}`;

            return (
              <SingleSuggestedConnection key={user.id}>
                <p>
                  <b>{fullName}</b>
                </p>
                <p>{user.title}</p>
                <p>{user.location}</p>
                <RemoveConnectionButton
                  onClick={(e) => handleDeleteConnection(e, user.id)}
                >
                  Remove Connection
                </RemoveConnectionButton>
              </SingleSuggestedConnection>
            );
          })}
        </NetworkFeed>
      </Wrapper>
    </div>
  );
};
