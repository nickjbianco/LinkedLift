import React from "react";
import styled from "styled-components";
import AddEmploymentModal from "./AddEmploymentModal";
import PreviousEmploymentsFeed from "./PreviousEmploymentsFeed";

const Wrapper = styled.div`
  width: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
`;

export default () => {
  return (
    <Wrapper>
      <AddEmploymentModal />
      <PreviousEmploymentsFeed />
    </Wrapper>
  );
};
