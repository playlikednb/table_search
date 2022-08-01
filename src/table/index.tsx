import * as React from "react";
import { useState } from "react";

import { cutDataPerPage } from "../helpers";
import { Search } from "./search";
import { DataLayout } from "./dataLayout";
import { Pagination } from "./pagination";

const PAGE_LIMIT = 10;

export type IValue = any;

export interface IColumn {
  key: string;
  title: string;
  render?: (value: IValue) => IValue;
}

export interface ITableProps {
  columns: IColumn[];
  data: { [key: string]: IValue }[];
  sort: { key: string | null; type: string };
  handleSort: (key: string) => void;
}

interface ITableAndSearchProps extends ITableProps {
  searchText: string;
  handleSearch: (text: string) => void;
}

export const Table = (props: ITableAndSearchProps) => {
  const [limit] = useState(PAGE_LIMIT);
  const [offset, setOffset] = useState(0);

  const cutParams = {
    data: props.data,
    limit,
    offset
  };

  const dataToShow = cutDataPerPage(cutParams);

  return (
    <div>
      <Search onSearch={props.handleSearch} />
      <DataLayout
        columns={props.columns}
        data={dataToShow}
        sort={props.sort}
        handleSort={props.handleSort}
      />
      <Pagination
        pageCount={Math.ceil(props.data.length / limit)}
        onPageChange={(selected) => setOffset(selected * limit)}
      />
    </div>
  );
};
