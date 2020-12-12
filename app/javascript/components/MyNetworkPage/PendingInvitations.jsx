import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 600px;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  color: #000000e6;
`;

const Body = styled.p`
  font-size: 16px;
  color: #00000099;
  margin-right: 10px;
`;

export default () => {
  return (
    <Wrapper>
      <Title>No pending invitations</Title>
      <Body>Manage</Body>
    </Wrapper>
  );
};
