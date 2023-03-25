import styled from "styled-components";

export const Section = styled.section`
  max-width: 1200px;
  padding: 20px 0;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 36px) / 4);
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 2px 1px rgba(0, 0, 0, 0.2);
  & img {
    /* flex-grow: 1; */
  }
`;

export const ActorInfo = styled.div`
  /* flex-grow: 1; */
  box-sizing: border-box;
  height: 112px;
  padding: 20px 12px;
  text-align: center;
`

export const Name = styled.h3`
    margin-bottom: 12px;
`