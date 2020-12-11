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

const TextWrappers = styled.div`
  background-color: transparent;
  display: flex;
  align-self: flex-start;
  margin-left: 10px;
`;

const Text = styled.p`
  color: #00000099;
  font-size: 16px;
  cursor: pointer;
`;

const Line = styled.hr`
  width: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <TextWrappers>
        <Text>Edit public profile & URL</Text>
      </TextWrappers>
      <Line />
      <TextWrappers>
        <Text>Add profile in another language</Text>
      </TextWrappers>
    </Wrapper>
  );
};
