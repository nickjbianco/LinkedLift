import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutCurrentUser } from "../../reducers/CurrentUserReducer";
import axios from "axios";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import "./HeaderPage.scss";

const Header = styled.header`
  background-color: transparent;
  display: flex;
  flex-direction: center;
  align-items: center;
  padding: 0 30px;
  line-height: 10px;
  justify-content: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

const Navbar = styled.nav`
  cursor: pointer;
  display: flex;
  min-width: 400px;
  justify-content: space-evenly;
  overflow: hidden;
  font-size: 18px;
  line-height: 20px;
  margin-left: 145px;
`;

const LinkedLift = styled.h1`
  border-radius: 5px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  margin-right: 10px;
  padding: 5px 5px;
  color: white;
  font-size: 20px;
  display: flex;
  align-self: center;
  line-height: 10px;
`;

const LogoutButton = styled.div`
  border-radius: 5px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 800;
  padding: 2px;
  font-size: 100%;
  cursor: pointer;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

const Button = styled.button`
  border-radius: 5px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 800;
  padding: 2px;
  font-size: 100%;
  cursor: pointer;
  margin-left: 8px;
  line-height: 1.2;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
`;

const HeaderLogo = styled.b`
  background-color: transparent;
  color: #000000e6;
  line-height: 15px;
`;

const LogoutButtonWrapper = styled.div`
  background-color: transparent;
  display: flex;
  margin-left: 30px;
`;

const MainWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  margin-left: 45px;
`;

export default (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleLogoutClick = () => {
    axios.delete("/api/logout", { withCredentials: true }).then((response) => {
      props.handleLogOut();
      dispatch(logoutCurrentUser());
      props.history.push("/");
    });
  };

  return (
    <MainWrapper>
      <Header>
        <LinkedLift>lift</LinkedLift>
        <SearchBar />
        <Navbar>
          <NavLink exact to="/home" className="navlink">
            <HeaderLogo>Home</HeaderLogo>
          </NavLink>
          <NavLink to="/mynetwork" className="navlink">
            <HeaderLogo>My Network</HeaderLogo>
          </NavLink>
          <NavLink to="/gyms" className="navlink">
            <HeaderLogo>Gyms</HeaderLogo>
          </NavLink>
          <NavLink to={`/profile/${currentUser.id}`} className="navlink">
            <HeaderLogo>My Profile</HeaderLogo>
          </NavLink>
        </Navbar>
        <LogoutButtonWrapper>
          <LogoutButton onClick={() => handleLogoutClick()}>
            Logout
          </LogoutButton>
        </LogoutButtonWrapper>
      </Header>
    </MainWrapper>
  );
};
