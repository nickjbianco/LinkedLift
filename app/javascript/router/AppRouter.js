import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LinkedLiftApp from "../components/LinkedLiftApp/LinkedLiftApp";
import MyNetworkPage from "../components/MyNetworkPage/MyNetworkPage";
import GymsPage from "../components/GymsPage/GymsPage";
import HeaderPage from "../components/Header/HeaderPage";
import UserProfilePage from "../components/UserProfilePage/UserProfilePage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import HomePage from "../components/auth/HomePage";

export default (props) => {
  return (
    <BrowserRouter>
      <div>
        <HeaderPage {...props} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/home" component={LinkedLiftApp} />
          <Route path="/mynetwork" component={MyNetworkPage} />
          <Route path="/gyms" component={GymsPage} />
          <Route path="/profile/:id" component={UserProfilePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
