import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { receivedCurrentUser } from "../reducers/CurrentUserReducer";
import Home from "./auth/HomePage";
import AppRouter from "../router/AppRouter";
// HEROKU DEPLOYMENT LINK: https://rocky-plateau-63509.herokuapp.com/

export default (props) => {
  const dispatch = useDispatch();
  const [loggedInStatus, setLoggedIn] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogIn = (data) => {
    setLoggedIn("LOGGED_IN");
    setUser({ user: data.user });
  };

  const handleLogOut = () => {
    setLoggedIn("NOT_LOGGED_IN");
    setUser({});
  };

  const checkLoginStatus = () => {
    axios.get("/api/logged_in", { withCredentials: true }).then((response) => {
      if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
        setLoggedIn("LOGGED_IN");
        setUser({ user: response.data.user });
        dispatch(receivedCurrentUser(response.data.user));
      } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
        setLoggedIn("NOT_LOGGED_IN");
        setUser({});
      }
    });
    // .catch((error) => {
    //   console.log("check login error", error);
    // });
  };

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                handleLogIn={handleLogIn}
                loggedInStatus={loggedInStatus}
                handleLogOut={handleLogOut}
              />
            )}
          />
          <Route
            // path="/home"
            path="/"
            render={(props) => (
              <AppRouter {...props} handleLogOut={handleLogOut} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
