import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk } from "../../reducers/UsersReducer";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 24px 40px 12px 16px;
  margin-top: 24px;
  width: 20%;
  border: solid;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #d6cec2;
`;

const BottomLine = styled.hr`
  border-bottom: 1px solid var(--warm-gray-40, #cfcfcf);
  width: calc(100% - 48px);
  margin: 8px -8px 8px 64px;
`;

const SuggestedUserInfo = styled.ul`
  line-height: 1.33333;
  font-weight: 600;
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
        <SuggestedUserInfo key={suggestedUser.id}>
          <Link to="/">
            <h4>
              {suggestedUser.first_name} {suggestedUser.last_name}
            </h4>
          </Link>
          <p>{suggestedUser.title}</p>
          <BottomLine />
        </SuggestedUserInfo>
      ))}
    </Wrapper>
  );
};
