import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  padding: 20px 16px;
  margin: 0 auto;
`;

export const Header = styled.header`
border-bottom: 1px solid black;
`;

export const Link = styled(NavLink)`
  padding: 20px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 16px;

  &:first-child {
    margin-right: 8px;
  }

  &:hover {
    color: tomato;
  }

  &.active {
    color: tomato;
  }
`;