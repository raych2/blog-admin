import React from 'react';
import styled from 'styled-components';
import NavLink from './shared/NavLink';
import BurgerMenu from './BurgerMenu';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
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
  @media (max-width: 430px) {
    .authorized {
      margin: 1rem;
    }
  }
`;

const Nav = ({ authorizedUser, setAuthorizedUser, setUserData }) => {
  return (
    <Navbar>
      {authorizedUser ? (
        <>
          <NavLink to="/">
            <h1 className="authorized">TOP Blog Admin</h1>
          </NavLink>
          <BurgerMenu
            setAuthorizedUser={setAuthorizedUser}
            setUserData={setUserData}
          />
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
