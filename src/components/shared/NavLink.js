import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export default NavLink;
