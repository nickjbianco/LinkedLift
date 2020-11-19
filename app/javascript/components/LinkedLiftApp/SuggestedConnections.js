import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersThunk } from "../../reducers/UsersReducer";

export default () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const allUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersThunk());
  }, []);

  return (
    <div>
      <h1>People You May Know</h1>
      {allUsers
        .filter((user) => user.id !== currentUser.id)
        .map((user) => (
          <ul key={user.id}>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.title}</p>
          </ul>
        ))
        .slice(0, 10)}
    </div>
  );
};
