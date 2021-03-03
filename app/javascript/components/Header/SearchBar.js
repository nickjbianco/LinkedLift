import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
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

export default () => {
  const [display, setDispaly] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  const handleClickOutside = (e) => {};

  const setSearchVal = (user) => {};

  return (
    <div>
      <Input />
    </div>
  );
};
