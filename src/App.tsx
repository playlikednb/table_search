import * as React from "react";
import { Table, IColumn } from "./table";
import { applySearch, handleSortState, sortData } from "./helpers";
import { useMemo, useState } from "react";
import { createData } from "./create-data";

const MAX_DATA = 50;
export const SORT_TYPES = {
  asc: "ASC",
  desc: "DESC"
};

const renderTags = (value: [] | string) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value;
};

interface ISortData {
  key: null | string;
  type: string;
}

export default function App() {
  const columns: IColumn[] = useMemo(
    () => [
      { key: "firstName", title: "First name" },
      { key: "lastName", title: "Last name" },
      { key: "age", title: "Age" },
      { key: "visits", title: "Visits" },
      { key: "status", title: "Status" },
      { key: "tags", title: "Tags", render: renderTags }
    ],
    []
  );

  const [data] = useState(() => createData(MAX_DATA));
  const [sort, changeSort] = useState<ISortData>({
    key: null,
    type: SORT_TYPES.asc
  });
  const [searchText, changeSearchText] = useState("");

  const handleSort = (key: string) => {
    changeSort((prevSort) => handleSortState(key, prevSort));
  };

  const handleSearch = (text: string) => {
    changeSearchText(text);
  };

  const dataSorted = sortData({ data, sort });
  const dataFiltered = applySearch({ text: searchText, data: dataSorted });

  return (
    <div>
      <h1>Test (1 lvl)</h1>
      <h3>Description of the task in the README.md</h3>
      <Table
        columns={columns}
        data={dataFiltered}
        sort={sort}
        handleSort={handleSort}
        searchText={searchText}
        handleSearch={handleSearch}
      />
    </div>
  );
}
