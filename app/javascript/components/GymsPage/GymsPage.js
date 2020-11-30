import React from "react";
import GymSearchComponent from "./GymSearchComponent";
import GymsFeedComponent from "./GymsFeedComponent";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e9e5df;
  justify-content: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

export default () => {
  return (
    <Wrapper>
      <GymSearchComponent />
      <GymsFeedComponent />
    </Wrapper>
  );
};
