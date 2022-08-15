import tw from "tailwind-styled-components";
import { Column, useTable } from "react-table"

interface TableData {
  col1: string;
  col2: string;
  col3:string;
  col4:string;
  col5:string;
  col6: string
}

interface TableProps {
  columns: Array<Column>;
  data: Array<TableData>
};

const ScheduleTableStyled = tw.table`
  w-full
  border
  border-blue-500/30
  rounded-xl
  mb-1
`;

const TableHeaderStyled = tw.thead`
  w-full
  border-b-2 
  border-blue-500/30
  }
`;

const Table: React.FC<TableProps> = ({
  columns, 
  data
}) => {
  const schedulerTable = useTable({ columns, data });

  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
  } = schedulerTable

  return (
    <ScheduleTableStyled {...getTableProps()}>
      <TableHeaderStyled>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>   
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </TableHeaderStyled>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, index:number) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render(
                      'Cell'
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </ScheduleTableStyled>
  );
};
  
export default Table;
