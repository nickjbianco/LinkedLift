import React from "react";
import styled from "styled-components";
import AddEmploymentModal from "./AddEmploymentModal";
import PreviousEmploymentsFeed from "./PreviousEmploymentsFeed";

const Wrapper = styled.div`
  width: 216px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-end;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  width: 550px;
  margin-bottom: 30px;
`;

export default () => {
  return (
    <Wrapper>
      <AddEmploymentModal />
      <PreviousEmploymentsFeed />
    </Wrapper>
  );
};
