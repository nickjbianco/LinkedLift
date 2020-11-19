import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MyAccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
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
