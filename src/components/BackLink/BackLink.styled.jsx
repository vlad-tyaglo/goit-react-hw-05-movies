import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  margin-bottom: 32px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid gray;
  border-radius: 4px;
  :hover,
  :focus {
    color: tomato;
  }
`;