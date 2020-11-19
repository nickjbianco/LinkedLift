import React from "react";
import GymSearchComponent from "./GymSearchComponent";
import GymsFeedComponent from "./GymsFeedComponent";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: red;
  justify-content: center;
`;

export default () => {
  return (
    <Wrapper>
      <GymSearchComponent />
      <GymsFeedComponent />
    </Wrapper>
  );
};
