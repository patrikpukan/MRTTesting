interface CellStyle {
  textAlign?: "left" | "center" | "right";
  fontStyle?: "normal" | "italic" | "bold";
  backgroundColor?: string;
}

interface StyledCell {
  rowNum: number;
  colNum: number;
  style: CellStyle;
}

const tableStyles: StyledCell[] = [
  // Header styles
  {
    rowNum: 0,
    colNum: 0,
    style: {
      textAlign: "center",
      fontStyle: "bold",
      backgroundColor: "#f5f5f5",
    },
  },
  {
    rowNum: 0,
    colNum: 1,
    style: {
      textAlign: "center",
      fontStyle: "bold",
      backgroundColor: "#f5f5f5",
    },
  },
  {
    rowNum: 0,
    colNum: 2,
    style: {
      textAlign: "center",
      fontStyle: "bold",
      backgroundColor: "#f5f5f5",
    },
  },
  // First name column
  {
    rowNum: 1,
    colNum: 0,
    style: {
      textAlign: "left",
      fontStyle: "normal",
      backgroundColor: "#ffffff",
    },
  },
  // Last name column
  {
    rowNum: 1,
    colNum: 1,
    style: {
      textAlign: "left",
      fontStyle: "normal",
      backgroundColor: "#ffffff",
    },
  },
  // Address column
  {
    rowNum: 1,
    colNum: 2,
    style: {
      textAlign: "left",
      fontStyle: "normal",
      backgroundColor: "#ffffff",
    },
  },
  // Alternating row styles
  {
    rowNum: 2,
    colNum: 0,
    style: {
      textAlign: "left",
      fontStyle: "normal",
      backgroundColor: "#f9f9f9",
    },
  },
  {
    rowNum: 2,
    colNum: 1,
    style: {
      textAlign: "left",
      fontStyle: "normal",
      backgroundColor: "#f9f9f9",
    },
  },
  {
    rowNum: 2,
    colNum: 2,
    style: {
      textAlign: "left",
      fontStyle: "normal",
      backgroundColor: "#f9f9f9",
    },
  },
];

export default tableStyles;
