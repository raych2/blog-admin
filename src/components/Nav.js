import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #14213d;

  h1 {
    margin: 1rem;
    font-weight: 400;
    color: #ffffff;
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

const Nav = () => {
  return (
    <Navbar>
      <NavLink to="/">
        <h1>TOP Blog Admin</h1>
      </NavLink>
    </Navbar>
  );
};

export default Nav;
