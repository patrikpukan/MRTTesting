import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TableBody,
} from "@mui/material";
import tableStyles from "./tableStyles";

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  employed: boolean;
  jobTitle: string;
  address: string;
  city: string;
  state: string;
};

const data: Person[] = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    age: 35,
    employed: true,
    jobTitle: "Software Engineer",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    age: 28,
    employed: true,
    jobTitle: "Marketing Manager",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    age: 45,
    employed: false,
    jobTitle: "none",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    age: 31,
    employed: true,
    jobTitle: "Financial Analyst",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    age: 42,
    employed: false,
    jobTitle: "none",
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
  { rowNum: 0, colNum: 2, colSpan: 3, title: "Employment Information" },
  { rowNum: 0, colNum: 5, colSpan: 3, title: "Location Details" },
  { rowNum: 1, colNum: 0, colSpan: 1, title: "First Name" },
  { rowNum: 1, colNum: 1, colSpan: 1, title: "Last Name" },
  { rowNum: 1, colNum: 2, colSpan: 1, title: "Age" },
  { rowNum: 1, colNum: 3, colSpan: 1, title: "Employed" },
  { rowNum: 1, colNum: 4, colSpan: 1, title: "Job Title" },
  { rowNum: 1, colNum: 5, colSpan: 1, title: "Address" },
  { rowNum: 1, colNum: 6, colSpan: 1, title: "City" },
  { rowNum: 1, colNum: 7, colSpan: 1, title: "State" },
];

const App = () => {
  // Helper function to get headers for a specific row
  const getHeadersForRow = (rowNumber: number) => {
    return headerConfig
      .filter((header) => header.rowNum === rowNumber)
      .sort((a, b) => a.colNum - b.colNum);
  };

  // Get the maximum row number to determine number of header rows needed
  const maxRowNum = Math.max(...headerConfig.map((header) => header.rowNum));

  return (
    <div>
      <TableContainer>
        <Table
          sx={{
            border: "1px solid rgba(224, 224, 224, 1)",
            borderCollapse: "collapse",
          }}
        >
          <TableHead>
            {/* Render header rows */}
            {Array.from({ length: maxRowNum + 1 }, (_, index) => (
              <TableRow key={`header-row-${index}`}>
                {getHeadersForRow(index).map((header, headerIndex) => (
                  <TableCell
                    key={`header-cell-${index}-${headerIndex}`}
                    align="center"
                    colSpan={header.colSpan}
                    sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  >
                    {header.title}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {/* Render data rows */}
            {data.map((row, rowIndex) => (
              <TableRow key={`data-row-${rowIndex}`}>
                <TableCell
                  align="center"
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  {row.name.firstName}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.name.lastName}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.age}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.employed ? "Yes" : "No"}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.jobTitle}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.address}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.city}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}
                  align="center"
                >
                  {row.state}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
