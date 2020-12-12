import React from "react";
import ManageMyNetworkComponent from "./ManageMyNetworkComponent";
import NetworkFeedComponent from "./NetworkFeedComponent";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e9e5df;
  height: 100%;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

export default () => {
  return (
    <Wrapper>
      <ManageMyNetworkComponent />
      <NetworkFeedComponent />
    </Wrapper>
  );
};
