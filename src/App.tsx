import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import tableStyles from "./tableStyles";
//example data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
];
interface HeaderConfig {
  rowNum: number;
  colNum: number;
  colSpan: number;
  title: string;
}

const headerConfig: HeaderConfig[] = [
  { rowNum: 0, colNum: 0, colSpan: 2, title: "Personal Information" },
  { rowNum: 0, colNum: 2, colSpan: 3, title: "Location Details" },
  { rowNum: 1, colNum: 0, colSpan: 1, title: "First Name" },
  { rowNum: 1, colNum: 1, colSpan: 1, title: "Last Name" },
  { rowNum: 1, colNum: 2, colSpan: 1, title: "Address" },
  { rowNum: 1, colNum: 3, colSpan: 1, title: "City" },
  { rowNum: 1, colNum: 4, colSpan: 1, title: "State" },
];
const App = () => {
  const getCellStyle = (rowNum: number, colNum: number) => {
    const cellStyle = tableStyles.find(
      (style) => style.rowNum === rowNum && style.colNum === colNum
    );
    return cellStyle?.style || {};
  };
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        header: headerConfig[0].title,
        columns: [
          {
            accessorKey: "name.firstName",
            header: headerConfig[2].title,
            Cell: ({ row, cell }) => (
              <div style={getCellStyle(row.index, 0)}>
                {cell.getValue<string>()}
              </div>
            ),
          },
          {
            accessorKey: "name.lastName",
            header: headerConfig[3].title,
            Cell: ({ row, cell }) => (
              <div style={getCellStyle(row.index, 1)}>
                {cell.getValue<string>()}
              </div>
            ),
          },
        ],
      },
      {
        header: headerConfig[1].title,
        columns: [
          {
            accessorKey: "address",
            header: headerConfig[4].title,
            Cell: ({ row, cell }) => (
              <div style={getCellStyle(row.index, 2)}>
                {cell.getValue<string>()}
              </div>
            ),
          },
          {
            accessorKey: "city",
            header: headerConfig[5].title,
            Cell: ({ row, cell }) => (
              <div style={getCellStyle(row.index, 3)}>
                {cell.getValue<string>()}
              </div>
            ),
          },
          {
            accessorKey: "state",
            header: headerConfig[6].title,
            Cell: ({ row, cell }) => (
              <div style={getCellStyle(row.index, 4)}>
                {cell.getValue<string>()}
              </div>
            ),
          },
        ],
      },
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default App;
