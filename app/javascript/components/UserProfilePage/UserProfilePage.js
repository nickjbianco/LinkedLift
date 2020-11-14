import React from "react";
import UserInfo from "./UserInfo";
import PeopleYouMayKnow from "./PeopleYouMayKnow";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: red;
`;

export default (props) => {
  return (
    <Wrapper>
      <UserInfo />
      <PeopleYouMayKnow />
    </Wrapper>
  );
};