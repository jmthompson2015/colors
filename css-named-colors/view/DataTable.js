class DataTable extends React.Component {
  constructor(props) {
    super(props);

    // Factories.
    this.Table = React.createFactory(Reactable.Table);
    this.Tr = React.createFactory(Reactable.Tr);
    this.Td = React.createFactory(Reactable.Td);
  }

  createRow(data, key) {
    const { columns } = this.props;
    const cells = [];
    columns.forEach(column => {
      const value = this.determineValue(column, data);
      const cell = this.determineCell(column, data, value);
      cells.push(
        this.Td(
          { key: cells.length, className: column.className, column: column.key, value },
          cell === undefined ? "" : cell
        )
      );
    }, this);

    return this.Tr({ key, className: "striped--light-gray" }, cells);
  }

  createTable(rowData) {
    const { columns, defaultSort, sortable } = this.props;
    const rows = [];

    rowData.forEach((data, i) => {
      rows.push(this.createRow(data, i));
    });

    return this.Table(
      {
        className: "dataTable bg-white collapse f6",
        columns,
        sortable: sortable || true,
        defaultSort
      },
      rows
    );
  }

  determineCell(column, data, value) {
    let answer;
    const { cellFunctions } = this.props;

    if (cellFunctions && cellFunctions[column.key]) {
      answer = cellFunctions[column.key](data);
    } else {
      answer = value;
    }

    return answer;
  }

  determineValue(column, data) {
    let answer;
    const { valueFunctions } = this.props;

    if (valueFunctions && valueFunctions[column.key]) {
      answer = valueFunctions[column.key](data);
    } else {
      answer = data[column.key];
    }

    return answer;
  }

  render() {
    const { rowData } = this.props;
    const table = this.createTable(rowData);

    const rows = [];

    const rowCount = `Row Count: ${rowData.length}`;
    rows.push(
      ReactDOMFactories.tr(
        { key: rows.length },
        ReactDOMFactories.td({ className: "f6 tl" }, rowCount)
      )
    );
    rows.push(ReactDOMFactories.tr({ key: rows.length }, ReactDOMFactories.td({}, table)));
    rows.push(
      ReactDOMFactories.tr(
        { key: rows.length },
        ReactDOMFactories.td({ className: "f6 tl" }, rowCount)
      )
    );

    return ReactDOMFactories.table({}, ReactDOMFactories.tbody({}, rows));
  }
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  rowData: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  cellFunctions: PropTypes.shape(),
  defaultSort: PropTypes.shape(),
  sortable: PropTypes.arrayOf(PropTypes.shape()),
  valueFunctions: PropTypes.shape()
};

DataTable.defaultProps = {
  cellFunctions: {},
  defaultSort: {},
  sortable: [],
  valueFunctions: {}
};

export default DataTable;
