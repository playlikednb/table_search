import styled from "styled-components";

export const PaginationContainer = styled.div`
  margin-top: 15px;

  .active {
    font-weight: 700;
    background-color: #425fc7;
    color: #fff;
    pointer-events: none;
  }

  .pagination {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .disabled {
    pointer-events: none;
    background-color: #cdcdcd;
    border-color: transparent;
    color: #888;
  }

  li {
    cursor: pointer;
    margin: 0 4px;
    border: 1px solid #425fc7;
    border-radius: 4px;
    transition: background-color 0.15s ease, border-color 0.15s ease,
      color 0.15s ease;

    &:hover {
      background-color: #a6c5ff;
      border-color: #a6c5ff;
    }

    a {
      display: inline-block;
      padding: 5px 10px;
    }
  }
`;
