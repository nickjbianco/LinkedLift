import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-self: flex-end;

  justify-content: space-around;

  background-color: #dce6f1;
  border-radius: 25px;
  border: 2px solid #d6cec2;

  height: 400px;
  width: 550px;
`;

const Title = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  line-height: 0px;
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
`;

const DashboardStatLine = styled.div`
  border-radius: 10px;
  border: 1px solid #d6cec2;
  padding: 5px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 0px;
`;

const JobStatTracker = styled.div`
  border-radius: 10px;
  border: 1px solid #d6cec2;
  background-color: white;
  margin: 0 10px 10px 10px;
  padding: 5px;
  line-height: 8px;
`;

const VerticalPipes = styled.hr`
  height: 110%;
  display: flex;
  align-self: center;
`;

const Numbers = styled.p`
  font-size: 32px;
`;

export default () => {
  return (
    <MainWrapper>
      <Title>
        <p>Your Dashboard</p>
        <Subtitle>
          <em>Private to you</em>
        </Subtitle>
      </Title>

      <DashboardStatLine>
        <div>
          <Numbers>40</Numbers>
          <p>Who viewed your profile</p>
        </div>

        <VerticalPipes />

        <div>
          <Numbers>22</Numbers>
          <p>Article views</p>
        </div>

        <VerticalPipes />

        <div>
          <Numbers>30</Numbers>
          <p>Search appearances</p>
        </div>
      </DashboardStatLine>

      <JobStatTracker>
        <div>
          <p>
            <b>Salary Insights</b>
          </p>
          <p>
            <em>See how your salary compares to others in the community</em>
          </p>
        </div>
        <hr />
        <div>
          <p>
            <b>My items</b>
          </p>
          <p>
            <em>Keep track of your jobs, courses and articles</em>
          </p>
        </div>
      </JobStatTracker>
    </MainWrapper>
  );
};
