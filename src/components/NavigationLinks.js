import React from 'react';
import styled from 'styled-components';
import NavLink from './shared/NavLink';

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  li {
    list-style-type: none;
    padding: 1rem;
    &:hover {
      color: #14213d;
      background-color: #e5e5e5;
    }
  }
  @media (max-width: 400px) {
    flex-flow: column nowrap;
    background-color: #14213d;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 3.5rem;
    right: 0;
    height: 15vh;
    width: 100vw;
    padding-top: 0;
    transition: transform 0.3s ease-in-out;
  }
`;

const NavigationLinks = ({ setAuthorizedUser, open, setOpen }) => {
  const logOut = (e) => {
    localStorage.setItem('bearer', '');
    setAuthorizedUser(false);
  };

  return (
    <>
      <LinkList open={open}>
        <NavLink to="/posts/create" onClick={() => setOpen(!open)}>
          <li>Create post</li>
        </NavLink>
        <NavLink onClick={logOut} to="/">
          <li>Log out</li>
        </NavLink>
      </LinkList>
    </>
  );
};

export default NavigationLinks;
