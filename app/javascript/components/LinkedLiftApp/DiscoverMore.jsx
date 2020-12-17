import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  text-align: center;

  border-radius: 15px;
  border: 2px solid #d6cec2;

  height: 170px;
  width: 216px;

  margin-top: 10px;
`;

const MainList = styled.ul`
  background-color: transparent;
  font-size: 14px;
  color: #0a66c2;
  line-height: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 6%;
`;

const DiscoverMore = styled.div`
  background-color: transparent;
  display: flex;
  align-self: center;
  height: 25%;
  line-height: 1px;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
  width: 100%;
  line-height: 1px;
`;

export default () => {
  return (
    <MainWrapper>
      <MainList>
        <p>Groups</p>
        <p>Events</p>
        <p>Followed Hashtags</p>
      </MainList>
      <BottomLine />
      <DiscoverMore>
        <p>Discover More</p>
      </DiscoverMore>
    </MainWrapper>
  );
};
