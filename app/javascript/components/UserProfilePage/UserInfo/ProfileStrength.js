import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-end;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;

  height: 132px;
  width: 550px;
`;

const ProfileStrengthTitle = styled.p`
  font-size: 16px;
  margin-left: 10px;
`;

export default () => {
  return (
    <Wrapper>
      <ProfileStrengthTitle>
        Profile Strength: <b>Intermediate</b>
      </ProfileStrengthTitle>
    </Wrapper>
  );
};
