import styled from "styled-components";
import ReactPaginate from 'react-paginate';


export const Paginate = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;

  & .page-link {
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    outline: 0;
    border: 0;
    vertical-align: middle;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    border-radius: 4px;
    text-align: center;
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    
    color: rgba(0, 0, 0, 0.87);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  & .page-item {
    box-sizing: border-box;
    min-width: 32px;
    height: 32px;
    margin: 0 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center; 
  }

  & .page-item.active {
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 4px;
  }
& .page-item:hover {
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

& .page-item.disabled {
  opacity: 0.38;
  pointer-events: none;
  cursor: default;

}
`;