import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  padding: 20px 16px;
  margin: 0 auto;
`;

export const MovieCard = styled.div`
  height: 350px;
  display: flex;
  gap: 16px;
`;

export const Title = styled.h2`
    margin-bottom: 16px;
`

export const Overview = styled.div`
    margin-top: 20px;
`
export const Genres = styled.div`
    margin-top: 20px;
`

export const SecondaryTitle = styled.h3`
    margin-bottom: 8px;
`

export const AdditionalInfoCard = styled.div`
    padding-top: 20px;
`
export const List = styled.ul`
    display: flex;
    gap: 16px;
`

export const ListItem = styled.li`
  width: 100px;
  &:first-child {
    margin-left: 8px;
  }
  
`

export const Link = styled(NavLink)`
  font-size: 16px;
  color: black;
  display: block;
  padding: 8px 20px; 
  border: 1px solid gray;
  border-radius: 5px;

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    color: tomato;
  }

  &.active {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
    color: tomato;
  }
        
`