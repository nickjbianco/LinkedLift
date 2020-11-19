import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gymsThunk } from "../../reducers/GymsReducer";
import styled from "styled-components";

const GymList = styled.div`
  background-color: blue;
  display: flex-start;
`;

const Title = styled.h1`
  background-color: green;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: orange;
  display: flex;
`;

export default () => {
  const dispatch = useDispatch();
  const allGyms = useSelector((state) => state.gyms);

  useEffect(() => {
    dispatch(gymsThunk());
  }, []);

  return (
    <GymList>
      <Title>Recommended for you</Title>
      <Wrapper>
        {allGyms
          .map((gym) => (
            <ul key={gym.id}>
              <h3>{gym.name}</h3>
              <p>{gym.location}</p>
              <p>{gym.description}</p>
            </ul>
          ))
          .slice(0, 4)}
      </Wrapper>
      <Wrapper>
        {allGyms
          .map((gym) => (
            <ul key={gym.id}>
              <h3>{gym.name}</h3>
              <p>{gym.location}</p>
              <p>{gym.description}</p>
            </ul>
          ))
          .slice(4, 8)}
      </Wrapper>
      <Wrapper>
        {allGyms
          .map((gym) => (
            <ul key={gym.id}>
              <h3>{gym.name}</h3>
              <p>{gym.location}</p>
              <p>{gym.description}</p>
            </ul>
          ))
          .slice(8, 12)}
      </Wrapper>
    </GymList>
  );
};
