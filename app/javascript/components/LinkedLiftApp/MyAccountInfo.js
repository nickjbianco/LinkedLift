import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { alreadyConnected } from "../../reducers/UsersReducer";
import styled from "styled-components";

const MyAccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  background-color: white;

  border-radius: 15px;
  border: 2px solid #d6cec2;

  height: 100%;
  width: 216px;

  margin-top: 10px;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
  width: 100%;
`;

const ConnectionInfo = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 6%;
  font-size: 12px;
`;

const CurrentUserTitle = styled.p`
  font-size: 16px;
`;

const CurrentUserSubTitle = styled.p`
  font-size: 12px;
`;

export default () => {
  const currentUser = useSelector((state) => state.currentUser);
  const connections = useSelector((state) => alreadyConnected(state));
  const fullName = `${currentUser.first_name} ${currentUser.last_name}`;

  return (
    <MyAccountInfo>
      <CurrentUserTitle>
        <b>
          <Link to={`/profile/${currentUser.id}`}>{fullName}</Link>
        </b>
      </CurrentUserTitle>

      <CurrentUserSubTitle>
        {currentUser.title} in {currentUser.location}
      </CurrentUserSubTitle>

      <BottomLine />

      <ConnectionInfo>
        <p>Connections {connections.length}</p>
        <p>Who viewed your profile 9</p>
      </ConnectionInfo>

      <CurrentUserSubTitle>
        Access exclusive tools & insights
        <br />
        <b>Try Premium Free for 1 Month</b>
      </CurrentUserSubTitle>
    </MyAccountInfo>
  );
};
