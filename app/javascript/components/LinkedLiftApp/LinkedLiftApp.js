import React from "react";
import MyPost from "./MyPost";
import MyAccountInfo from "./MyAccountInfo";
import styled from "styled-components";
import RightColumn from "./RightColumnComponents/RightColumn";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f3f2ef;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
    "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
`;

export default () => {
  return (
    <Wrapper>
      <MyAccountInfo />
      <MyPost />
      <RightColumn />
    </Wrapper>
  );
};
