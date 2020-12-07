import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 216px;
  border: solid;
  border-radius: 25px;
  border: 2px solid #d6cec2;
`;

const Title = styled.p`
  font-size: 16px;
  display: flex;
  align-self: flex-start;
  padding-left: 10px;
`;

const NewsFeedList = styled.ul`
  font-size: 12px;
`;

const NewsSource = styled.li`
  line-height: 2px;
  margin-bottom: 30px;
`;

export default () => {
  return (
    <Wrapper>
      <Title>
        <b>National News</b>
      </Title>
      <NewsFeedList>
        <NewsSource>
          <b>
            <p>Google News</p>
          </b>
          <br />
          20 hrs ago * 1,100 readers
        </NewsSource>
        <NewsSource>
          <b>
            <p>Yahoo News</p>
          </b>
          <br />
          13 hrs ago * 2,500 readers
        </NewsSource>
        <NewsSource>
          <b>
            <p>Forbes</p>
          </b>
          <br />
          20 hrs ago * 14,000 readers
        </NewsSource>
        <NewsSource>
          <b>
            <p>USA Today</p>
          </b>
          <br />
          20 hrs ago * 4,000 readers
        </NewsSource>
        <NewsSource>
          <b>
            <p>BBC News</p>
          </b>
          <br />
          20 hrs ago * 4,500 readers
        </NewsSource>
      </NewsFeedList>
    </Wrapper>
  );
};
