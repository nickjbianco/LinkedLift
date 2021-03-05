import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  color: rgba(var(--cool-gray-80, #283e4a), 0.75);
  font-weight: 400;
  font-size: 14px;
  background-color: var(--cool-gray-30, #e1e9ee);
  border-color: var(--cool-gray-30, #e1e9ee);
  border: 0.1rem solid rgba(0, 0, 0, 0.6);
  line-height: 20px;
`;

const AutoCompleteContainer = styled.div`
  padding-top: 15px;
  background-color: white;
  height: fit-content;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Dropdown = styled.div`
  min-height: 40px;
  overflow: scroll;
  display: flex;
  align-items: center;
`;

export default () => {
  const [display, setDisplay] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    axios
      .get("api/users")
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

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

  const setSearchVal = (username) => {
    setSearch(username);
    setDisplay(false);
  };

  return (
    <div ref={wrapperRef}>
      <Input
        onClick={() => setDisplay(!display)}
        placeholder="Search Lifters"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {display && (
        <AutoCompleteContainer>
          {users
            .filter(({ first_name }) => first_name.indexOf(search) > -1)
            .map((user) => {
              return (
                <Link
                  onClick={() =>
                    setSearchVal(`${user.first_name} ${user.last_name}`)
                  }
                  key={user.id}
                  tabIndex="0"
                  to={`/profile/${user.id}`}
                >
                  <Dropdown>{`${user.first_name} ${user.last_name}`}</Dropdown>
                </Link>
              );
            })}
        </AutoCompleteContainer>
      )}
    </div>
  );
};
