import React from "react";
import MyPost from "./MyPost";
import MyAccountInfo from "./MyAccountInfo";
import SuggestedConnections from "./SuggestedConnections";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding-left: 20px;
  background-color: #f3f2ef;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  height: 100%;
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
  background-color: white;
  margin-top: 10px;
`;

const RightColumn = styled.div`
  flex-grow: 2;
  background-color: white;
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin: 10px 40px 40px 10px;
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
