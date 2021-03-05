import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gymsThunk } from "../../reducers/GymsReducer";
import styled from "styled-components";
// import axios from "axios";

// const SearchWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   background-color: white;
// `;

const Wrapper = styled.div`
  background-color: #dce6f1;
  padding: 10px 10px;
  margin: 30px 10px;
  margin-left: 50px;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  text-align: center;
  width: 900px;
`;

const SearchInputs = styled.textarea`
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

// const GymSearchForm = styled.form`
//   background-color: #dce6f1;
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;

// const SearchButton = styled.button`
//   border-radius: 25px;
//   border: 2px solid var(--blue-70, #0073b1);
//   background-color: var(--blue-70, #0073b1);
//   color: white;
//   font-weight: 600;
//   font-size: 90%;
//   cursor: pointer;
//   font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
//     Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
//     Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
//     Lucida Grande, Helvetica, Arial, sans-serif;
//   width: 15%;
//   height: 70%;
//   display: flex;
//   align-self: center;
//   align-items: center;
//   margin-left: 8px;
//   height: 30px;
//   margin-top: 13px;
// `;

export default () => {
  const dispatch = useDispatch();
  const allGyms = useSelector((state) => state.gyms);

  useEffect(() => {
    dispatch(gymsThunk());
  }, []);

  console.log(allGyms);

  return (
    <div>
      <Wrapper>
        <SearchGymTitle>Search for your next gym</SearchGymTitle>
        <SearchInputs placeholder="Search by Gym Name" />
      </Wrapper>
    </div>
  );
};
