import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk } from "../../reducers/UsersReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: yellow;
`;

export default () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser);
  const suggestedUsers = allUsers
    .filter((user) => user.id !== currentUser.id)
    .slice(0, 5);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  return (
    <Wrapper>
      <h1>People You May Know</h1>
      {suggestedUsers.map((suggestedUser) => (
        <ul key={suggestedUser.id}>
          <h4>
            {suggestedUser.first_name} {suggestedUser.last_name}
          </h4>
          <p>{suggestedUser.title}</p>
        </ul>
      ))}
    </Wrapper>
  );
};
