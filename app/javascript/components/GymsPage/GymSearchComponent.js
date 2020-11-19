import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  padding: 10px 10px;
  margin: 10px;
  border-radius: 25px;
  border: 2px solid #d6cec2;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

const Button = styled.button`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
  padding: 0;
  font-size: 100%;
  cursor: pointer;
  margin-left: 8px;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
`;

const SearchInputs = styled.textarea`
  border-radius: 10px;
  border: 2px solid #d6cec2;
`;

export default () => {
  const [descriptionOne, setDescriptionOne] = useState(
    "Search by title or company"
  );
  const [descriptionTwo, setDescriptionTwo] = useState("Search by location");

  const handleGymSearch = (e) => {
    e.preventDefault();
    console.log("working");
    setDescriptionOne("Search by title or company");
    setDescriptionTwo("Search by location");
  };

  return (
    <div>
      <Wrapper>
        <h1>Search for your next gym</h1>
        <SearchWrapper>
          <form onSubmit={handleGymSearch}>
            <SearchInputs
              placeholder={descriptionOne}
              onChange={(e) => setDescriptionOne(e.target.value)}
            />
            <SearchInputs
              placeholder={descriptionTwo}
              onChange={(e) => setDescriptionTwo(e.target.value)}
            />
            <Button>Search</Button>
          </form>
        </SearchWrapper>
      </Wrapper>
    </div>
  );
};
