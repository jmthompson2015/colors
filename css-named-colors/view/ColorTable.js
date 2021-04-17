import TableColumns from "./TableColumns.js";

class ColorTable extends React.Component {
  render() {
    const { axis, tableRows } = this.props;

    const mapFunction = (row) => R.mergeRight(row, { axis });
    const myRowData = R.map(mapFunction, tableRows);
    const defaultSort = { column: "onAxis", direction: "desc" };

    const frt = new FilteredReactTable({
      tableColumns: TableColumns,
      tableRows: myRowData,
      defaultSort,
      appName: "CssNamedColor",
    });

    return frt.tableElement();
  }
}

ColorTable.propTypes = {
  tableRows: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  axis: PropTypes.shape(),
};

ColorTable.defaultProps = {
  axis: undefined,
};

export default ColorTable;
