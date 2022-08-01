import * as React from "react";
import { StyledTable, Heading } from "./styled";
import { ITableProps } from "../index";

export const DataLayout = React.memo((props: ITableProps) => {
  const { columns, data, sort } = props;

  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <Heading
              key={column.key}
              active={sort.key === column.key}
              sortType={sort.type}
              onClick={() => props.handleSort(column.key)}
            >
              {column.title}
            </Heading>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.firstName + item.lastName + item.tags.toString()}>
            {columns.map((column) => {
              const content = column.render
                ? column.render(item[column.key])
                : item[column.key];
              return (
                <td
                  key={column.key + item.firstName}
                  dangerouslySetInnerHTML={{
                    __html: content
                  }}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
});
