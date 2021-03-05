import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gymsThunk } from "../../reducers/GymsReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #e9e5df;
  justify-content: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

const SearchWrapper = styled.div`
  background-color: #dce6f1;
  padding: 10px 10px;
  margin: 30px 10px;
  margin-left: 50px;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  text-align: center;
  width: 900px;
`;

const SearchInput = styled.textarea`
  border-radius: 10px;
  border: 2px solid #d6cec2;
  height: 40px;
  width: 50%;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  font-size: 20px;
  margin: 5px;
`;

const SearchGymTitle = styled.p`
  color: #000000e6;
  font-size: 24px;
`;

const GymList = styled.div`
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  display: flex;
  margin-bottom: 10px;
  width: 930px;
  margin-left: 40px;
`;

const GymWrapper = styled.div`
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
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    dispatch(gymsThunk());
  }, []);

  console.log(allGyms);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    const { current: wrap } = wrapperRef;

    if (wrap && !wrap.contains(e.target)) {
      setDisplay(false);
    }
  };

  const setSearchVal = (gymName) => {
    setSearch(gymName);
    setDisplay(false);
  };

  return (
    <Wrapper>
      <SearchWrapper ref={wrapperRef}>
        <SearchGymTitle>Search for your next gym</SearchGymTitle>
        <SearchInput
          onClick={() => setDisplay(!display)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Gym Name"
        />
      </SearchWrapper>
      {display && (
        <GymList>
          <GymWrapper>
            {allGyms
              .filter(({ name }) => name.indexOf(search) > -1)
              .map((gym) => (
                <Gym
                  tabIndex="0"
                  onClick={() => setSearchVal(gym.name)}
                  key={gym.id}
                >
                  <h3>{gym.name}</h3>
                  <div>
                    <p>{gym.location}</p>
                    <p>{gym.description}</p>
                  </div>
                </Gym>
              ))}
          </GymWrapper>
        </GymList>
      )}
    </Wrapper>
  );
};
