import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  margin-top: 30px;
  border: solid;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  margin-left: 20px;
  width: 350px;
`;

export default () => {
  return (
    <Wrapper>
      <p>Edit profile advanced</p>
    </Wrapper>
  );
};
