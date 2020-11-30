import React from "react";
import ManageMyNetworkComponent from "./ManageMyNetworkComponent";
import NetworkFeedComponent from "./NetworkFeedComponent";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #e9e5df;
`;

export default () => {
  return (
    <Wrapper>
      <ManageMyNetworkComponent />
      <NetworkFeedComponent />
    </Wrapper>
  );
};
