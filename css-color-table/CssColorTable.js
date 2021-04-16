/* eslint no-console: ["error", { allow: ["log"] }] */

import CssNamedColor from "../artifact/CssNamedColor.js";

import ColorUtilities from "../model/ColorUtilities.js";

import TableColumns from "./TableColumns.js";

const mapFunction = (color) => {
  const hsl = ColorUtilities.rgbToHsl(color.r, color.g, color.b);

  return R.mergeRight(color, hsl);
};
const tableRows = R.map(mapFunction, CssNamedColor.values());

const appName = "Css Color Table";
const onFilterChange = (filteredTableRows) => {
  console.log(
    `onFilterChange() filteredTableRows.length = ${filteredTableRows.length}`
  );
};
const onShowColumnChange = (columnToChecked) => {
  console.log(
    `onShowColumnChange() columnToChecked = ${JSON.stringify(columnToChecked)}`
  );
};
const isVerbose = false;
const frt = new FilteredReactTable(
  TableColumns,
  tableRows,
  appName,
  onFilterChange,
  onShowColumnChange,
  isVerbose
);

ReactDOM.render(frt.filterPanel(), document.getElementById("filter"));
ReactDOM.render(frt.showColumnsPanel(), document.getElementById("showColumns"));
ReactDOM.render(frt.tableElement(), document.getElementById("table"));
