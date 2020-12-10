import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: orange;
  width: 100%;
  height: 100%;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

// background-color: #e9e5df;

export default () => {
  return (
    <Wrapper>
      <UserInfo />
      <PeopleYouMayKnow />
    </Wrapper>
  );
};
