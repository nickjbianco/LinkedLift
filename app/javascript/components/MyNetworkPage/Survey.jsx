import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 600px;
  border-radius: 15px;
  border: 2px solid #d6cec2;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 10px 10px;
`;

const WrapperTitle = styled.p`
  font-size: 16px;
  color: #000000e6;
`;

const ContinueButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;
  width: 15%;
  height: 25px;
`;

export default () => {
  return (
    <Wrapper>
      <WrapperTitle>
        Take a survey about your connections to improve recommendations
      </WrapperTitle>
      <ContinueButton disabled={true}>Continue</ContinueButton>
    </Wrapper>
  );
};
