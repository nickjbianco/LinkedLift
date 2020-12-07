import React from "react";
import MyPost from "./MyPost";
import MyAccountInfo from "./MyAccountInfo";
import SuggestedConnections from "./SuggestedConnections";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  background-color: #f3f2ef;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  height: 100%;
`;

export default (props) => {
  return (
    <Wrapper>
      <MyAccountInfo />
      <MyPost />
      <SuggestedConnections />
    </Wrapper>
  );
};
