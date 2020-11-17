import React from "react";
import styled from "styled-components";
import AddEmploymentModal from "./AddEmploymentModal";
import PreviousEmploymentsFed from "./PreviousEmploymentsFeed";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
`;

export default () => {
  return (
    <Wrapper>
      <h1>Previous Gyms</h1>
      <AddEmploymentModal />
      <PreviousEmploymentsFed />
    </Wrapper>
  );
};
