import * as React from "react";
import ReactPaginate from "react-paginate";

import { PaginationContainer } from "./styled";

interface IProps {
  pageCount: number;
  onPageChange: (selected: number) => void;
}

export const Pagination = React.memo((props: IProps) => {
  return (
    <PaginationContainer>
      <ReactPaginate
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(data) => props.onPageChange(data.selected)}
        activeClassName="active"
        containerClassName="pagination"
      />
    </PaginationContainer>
  );
});
