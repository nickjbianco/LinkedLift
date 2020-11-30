import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logoutCurrentUser } from "../../reducers/CurrentUserReducer";
import axios from "axios";
import styled from "styled-components";
import "./HeaderPage.scss";

const Button = styled.button`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  color: white;
  font-weight: 600;
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

const Header = styled.header`
  background-color: var(--cool-gray-80, #283e4a);
  display: flex;
  flex-direction: center;
  padding: 0 30px;
  line-height: 24px;
  width: 100vw;
  min-height: 52px;
  justify-content: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,
    Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Lucida Grande, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;

const Input = styled.input`
  color: rgba(var(--cool-gray-80, #283e4a), 0.75);
  font-weight: 400;
  font-size: 14px;
  background-color: var(--cool-gray-30, #e1e9ee);
  border-color: var(--cool-gray-30, #e1e9ee);
  border: 0.1rem solid rgba(0, 0, 0, 0.6);
  vertical-align: middle;
`;

const Navbar = styled.nav`
  cursor: pointer;
  display: flex;
  min-width: 400px;
  justify-content: space-evenly;
  overflow: hidden;
  font-size: 1.2rem;
  font-weight: 400;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 800px;
  padding-top: 15px;
`;

const LinkedLift = styled.h1`
  margin-right: 10px;
  padding: 5px 5px;
  background-color: #0a66c2;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const LogoutButton = styled.div`
  border-radius: 2px;
  border: 2px solid var(--blue-70, #0073b1);
  background-color: var(--blue-70, #0073b1);
  margin-bottom: 20px;
  color: white;
  font-weight: 600;
  font-size: 100%;
  cursor: pointer;
  margin-left: 8px;
  padding: 2px;
`;

export default (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    setSearchText("");
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3000/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogOut();
        dispatch(logoutCurrentUser());
        props.history.push("/login");
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };

  return (
    <div>
      <Header>
        <LinkedLift>LinkedLift</LinkedLift>
        <Wrapper>
          <form onSubmit={handleSearch}>
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button>Search</Button>
          </form>

          <Navbar>
            <NavLink exact to="/" className="navlink">
              <b>Home</b>
            </NavLink>
            <NavLink to="/mynetwork" className="navlink">
              <b>My Network</b>
            </NavLink>
            <NavLink to="/gyms" className="navlink">
              <b>Gyms</b>
            </NavLink>
            <NavLink to={`/profile/${currentUser.id}`} className="navlink">
              <b>My Profile</b>
            </NavLink>
          </Navbar>
          <LogoutButton onClick={() => handleLogoutClick()}>
            Logout
          </LogoutButton>
        </Wrapper>
      </Header>
    </div>
  );
};
