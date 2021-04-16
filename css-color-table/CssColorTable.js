/* eslint no-console: ["error", { allow: ["log"] }] */

import CssNamedColor from "../artifact/CssNamedColor.js";

import TableColumns from "./TableColumns.js";

const tableRows = CssNamedColor.values();
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
