import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MyAccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  background-color: white;

  border-radius: 15px;
  border: 2px solid #d6cec2;

  height: 150px;
  width: 300px;

  margin-top: 10px;
`;

export default () => {
  const currentUser = useSelector((state) => state.currentUser);
  const fullName = `${currentUser.first_name} ${currentUser.last_name}`;

  return (
    <MyAccountInfo>
      <h2>{fullName}</h2>
      <p>
        {currentUser.title} in {currentUser.location}
      </p>
    </MyAccountInfo>
  );
};
