import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 5px 40px 12px 16px;
  margin-top: 24px;
  width: 60%;
  border: solid;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
`;

const Title = styled.h1`
  background-color: red;
`;

export default () => {
  return (
    <Wrapper>
      <Title>News</Title>
      <ul>
        <li>
          <b>
            <a>Google News</a>
          </b>
        </li>
        <li>
          <b>
            <a>Yahoo News</a>
          </b>
        </li>
        <li>
          <b>
            <a>BBC News</a>
          </b>
        </li>
      </ul>
    </Wrapper>
  );
};
