import { IValue } from "../table";
import { SORT_TYPES } from "../App";

interface ICutParams {
  data: { [key: string]: IValue }[];
  limit: number;
  offset: number;
}

export const cutDataPerPage = (params: ICutParams) => {
  const { data, limit, offset } = params;

  return data.slice(offset, offset + limit);
};

interface ISort {
  key: string | null;
  type: string;
}

export const handleSortState = (key: string | null, prevSort: ISort) => {
  const result = { key };

  if (key === prevSort.key) {
    if (prevSort.type === SORT_TYPES.asc) {
      return {
        ...result,
        type: SORT_TYPES.desc
      };
    }

    return {
      key: null,
      type: SORT_TYPES.asc
    };
  }

  return { ...result, type: SORT_TYPES.asc };
};

interface ISortData {
  data: { [key: string]: IValue }[];
  sort: ISort;
}

export const sortData = (params: ISortData) => {
  const { data, sort } = params;

  if (sort.key === null) {
    return data;
  }

  const resultData = [...data];

  return resultData.sort((a, b) => {
    if (sort.key === null) {
      return 0;
    }

    const result = a[sort.key] > b[sort.key] ? 1 : -1;

    if (sort.type === SORT_TYPES.desc) {
      return result * -1;
    }

    return result;
  });
};

interface ISearch {
  text: string;
  data: { [key: string]: IValue }[];
}
export const applySearch = (params: ISearch) => {
  const { text, data } = params;

  if (text.length === 0) {
    return data;
  }

  const dataFiltered = data.filter((item) => {
    const dataInArr = Object.values(item);

    const dataInArrStringed = dataInArr.map((item: string | number | []) => {
      if (Array.isArray(item)) {
        return item.join(", ");
      }

      return item.toString();
    });

    const data = dataInArrStringed.join("|");

    return data.includes(text.toLowerCase());
  });

  const dataHighlighted = dataFiltered.map((item) => {
    return Object.keys(item).reduce((acc, currKey) => {
      let itemContent = item[currKey];

      if (Array.isArray(item[currKey])) {
        itemContent = itemContent.join(", ");
      } else {
        itemContent = itemContent.toString();
      }

      return {
        ...acc,
        [currKey]: itemContent.replace(
          new RegExp(text, "gi"),
          (match: any) => `<mark>${match}</mark>`
        )
      };
    }, {});
  });

  return dataHighlighted;
};
