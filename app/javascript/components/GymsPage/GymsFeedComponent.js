import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gymsThunk } from "../../reducers/GymsReducer";
import styled from "styled-components";

const GymList = styled.div`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  display: flex;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px;
`;

const Gym = styled.ul`
  border-radius: 10px;
  border: 2px solid #d6cec2;
`;

export default () => {
  const dispatch = useDispatch();
  const allGyms = useSelector((state) => state.gyms);

  useEffect(() => {
    dispatch(gymsThunk());
  }, []);

  return (
    <GymList>
      <Wrapper>
        {allGyms
          .map((gym) => (
            <Gym key={gym.id}>
              <h3>{gym.name}</h3>
              <div>
                <p>{gym.location}</p>
                <p>{gym.description}</p>
              </div>
            </Gym>
          ))
          .slice(0, 4)}
      </Wrapper>
      <Wrapper>
        {allGyms
          .map((gym) => (
            <Gym key={gym.id}>
              <h3>{gym.name}</h3>
              <div>
                <p>{gym.location}</p>
                <p>{gym.description}</p>
              </div>
            </Gym>
          ))
          .slice(4, 8)}
      </Wrapper>
      <Wrapper>
        {allGyms
          .map((gym) => (
            <Gym key={gym.id}>
              <h3>{gym.name}</h3>
              <div>
                <p>{gym.location}</p>
                <p>{gym.description}</p>
              </div>
            </Gym>
          ))
          .slice(8, 12)}
      </Wrapper>
    </GymList>
  );
};
