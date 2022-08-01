import * as React from "react";
import { SearchInput } from "./styled";

interface IProps {
  onSearch: (value: string) => void;
}

export const Search = React.memo((props: IProps) => {
  return (
    <SearchInput
      type="search"
      onChange={(e) => props.onSearch(e.target.value)}
      placeholder="Search"
    />
  );
});
