import React from "react";
import NewsFeed from "./components/NewsFeed";
import SuggestedConnections from "./components/SuggestedConnections";
import LatestOpportunity from "./components/LatestOpportunity";
import styled from "styled-components";

const MainWrapper = styled.div``;

export default () => {
  return (
    <MainWrapper>
      <NewsFeed />
      <LatestOpportunity />
      <SuggestedConnections />
    </MainWrapper>
  );
};
