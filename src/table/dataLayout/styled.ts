import styled, { css } from "styled-components";
import { SORT_TYPES } from "../../App";

export const StyledTable = styled.table`
  border-collapse: collapse;

  width: 100%;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }

  th {
    padding-bottom: 14px;
  }

  mark {
    background: #ffb184;
  }
`;

interface IHeadingProps {
  active: boolean;
  sortType: string;
}

export const Heading = styled.th<IHeadingProps>`
  position: relative;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`{
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 6px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid tomato;
        opacity: .75;
      }
    }}`}

  ${(props) =>
    props.sortType === SORT_TYPES.desc &&
    css`{
      &:after {
        transform: rotate(180deg);
      }
    }}`}
`;
