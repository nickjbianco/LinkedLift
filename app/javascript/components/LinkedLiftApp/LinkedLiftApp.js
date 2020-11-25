import React from "react";
import MyPost from "./MyPost";
import MyAccountInfo from "./MyAccountInfo";
import SuggestedConnections from "./SuggestedConnections";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #d6cec2;
`;

const LeftColumn = styled.div`
  flex-grow: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  height: 200px;
  margin-right: 10px;
  margin-top: 10px;
`;

const MiddleColumn = styled.div`
  flex-grow: 4;
  background-color: #d6cec2;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-top: 10px;
`;

const RightColumn = styled.div`
  flex-grow: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-left: 10px;
  margin-top: 10px;
  height: 600px;
`;

export default (props) => {
  return (
    <Wrapper>
      <LeftColumn>
        <MyAccountInfo />
      </LeftColumn>
      <MiddleColumn>
        <MyPost />
      </MiddleColumn>
      <RightColumn>
        <SuggestedConnections />
      </RightColumn>
    </Wrapper>
  );
};
