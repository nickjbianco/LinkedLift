import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gymsThunk } from "../../../../reducers/GymsReducer.js";
import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 5px 0px 12px 0px;
  margin-top: 24px;
  width: 216px;
  border: solid;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  line-height: 8px;
`;

const PromotedTitle = styled.p`
  font-size: 16px;
  display: flex;
  align-self: flex-start;
  padding-left: 10px;
`;

const OpportunitiesWrapper = styled.div`
  background-color: transparent;
  font-size: 12px;
`;

const GymName = styled.p`
  font-size: 14px;
`;

const GymInfo = styled.p`
  font-size: 12px;
`;

const GymWrapper = styled.div`
  padding-left: 10px;
  line-height: 15px;
`;

export default () => {
  const dispath = useDispatch();
  const allGyms = useSelector((state) => state.gyms);
  const firstThreeGyms = allGyms.slice(0, 3);

  useEffect(() => {
    dispath(gymsThunk());
  }, []);

  return (
    <MainWrapper>
      <PromotedTitle>
        <b>Promoted</b>
      </PromotedTitle>
      <OpportunitiesWrapper>
        {firstThreeGyms.map((gym) => {
          return (
            <GymWrapper key={gym.id}>
              <GymName>{gym.name}</GymName>
              <GymInfo>Become a powerlifter at {gym.location}</GymInfo>
            </GymWrapper>
          );
        })}
      </OpportunitiesWrapper>
    </MainWrapper>
  );
};
