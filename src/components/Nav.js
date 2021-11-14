import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #14213d;

  .public,
  .authorized {
    font-weight: 400;
    color: #ffffff;
  }
  .public {
    margin: 1rem;
  }
  .authorized {
    margin-left: 1rem;
  }
  .link-list {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    @media (max-width: 400px) {
      width: 30%;
    }
  }
  li {
    list-style-type: none;
    padding: 1rem;
    &:hover {
      background-color: #e5e5e5;
    }
  }
`;
const NavLink = styled(Link)`
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  display: block;
  color: #ffffff;
`;

const Nav = ({ authorizedUser, setAuthorizedUser }) => {
  const logOut = (e) => {
    localStorage.setItem('bearer', '');
    setAuthorizedUser(false);
  };

  return (
    <Navbar>
      {authorizedUser ? (
        <>
          <NavLink to="/">
            <h1 className="authorized">TOP Blog Admin</h1>
          </NavLink>
          <div className="link-list">
            <NavLink to="/posts/create">
              <li>Create post</li>
            </NavLink>
            <NavLink onClick={logOut} to="/">
              <li>Log out</li>
            </NavLink>
          </div>
        </>
      ) : (
        <NavLink to="/">
          <h1 className="public">TOP Blog Admin</h1>
        </NavLink>
      )}
    </Navbar>
  );
};

export default Nav;
