const { ColorSwatch } = ReactComponent;

const CU = FilteredReactTable.ColumnUtilities;

const TableColumns = [
  {
    key: "swatch",
    label: "Swatch",
    className: "h2 w3",
    valueFunction: (row) => row.displayName,
    cellFunction: (row) => {
      const { r, g, b, title } = row;
      const colorString = `${r},${g},${b}`;
      return React.createElement(ColorSwatch, {
        key: colorString,
        color: row,
        title,
      });
    },
  },
  {
    key: "displayName",
    label: "CSS Name",
    className: "tl",
  },
  {
    key: "sector",
    label: "Sector",
    className: "tl",
    valueFunction: (row) => (row.sector ? row.sector.name : undefined),
  },
  {
    key: "r",
    label: "Red",
    type: "number",
    className: "tr",
  },
  {
    key: "g",
    label: "Green",
    type: "number",
    className: "tr",
  },
  {
    key: "b",
    label: "Blue",
    type: "number",
    className: "tr",
  },
  {
    key: "magnitude",
    label: "Magnitude",
    type: "number",
    className: "tr",
    cellFunction: (row) =>
      !R.isNil(row.magnitude) ? row.magnitude.toFixed(2) : "",
  },
  {
    key: "hex",
    label: "Hex",
  },
  {
    key: "h",
    label: "Hue",
    type: "number",
    className: "tr",
    cellFunction: (row) => CU.formatNumber(row.h),
  },
  {
    key: "s",
    label: "Saturation",
    type: "number",
    className: "tr",
    cellFunction: (row) => CU.formatNumber(row.s),
  },
  {
    key: "l",
    label: "Lightness",
    type: "number",
    className: "tr",
    cellFunction: (row) => CU.formatNumber(row.l),
  },
];

export default TableColumns;
