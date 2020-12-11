import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  margin-left: 10px;
`;

const IndustryNewsText = styled.p`
  color: #0000008c;
  font-size: 12px;
  margin-left: 65px;
  cursor: pointer;
`;

const RelevantNewsInvitation = styled.p`
  font-size: 14px;
  color: #0000008c;
  text-align: center;
`;

const VisitGymButton = styled.button`
  border-radius: 25px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  font-size: 90%;
  cursor: pointer;

  width: 48%;
  height: 40%;

  display: flex;
  align-self: center;

  margin-bottom: 10px;
`;

export default () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <Wrapper>
      <TextWrappers>
        <IndustryNewsText>
          Get the latest jobs and industry news
        </IndustryNewsText>
      </TextWrappers>
      <TextWrappers>
        <RelevantNewsInvitation>
          <b>
            {currentUser.first_name}, explore relevant opportunities with
            Westside Barbell
          </b>
        </RelevantNewsInvitation>
        <VisitGymButton disabled={true}>Vist Westside Barbell</VisitGymButton>
      </TextWrappers>
    </Wrapper>
  );
};
