import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { receivedCurrentUser } from "../../reducers/CurrentUserReducer";
import axios from "axios";

export default (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/sessions",
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuth(response.data);
          dispatch(receivedCurrentUser(response.data.user));
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </ul>
      </form>
    </div>
  );
};
