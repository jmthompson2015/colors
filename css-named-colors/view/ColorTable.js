import DataTable from "./DataTable.js";
import TableColumns from "./TableColumns.js";

import VectorUtils from "../model/VectorUtilities.js";

const round2 = value => Math.round(value * 100.0) / 100.0;

const round4 = value => Math.round(value * 10000.0) / 10000.0;

class ColorTable extends React.Component {
  render() {
    const { axis, rowData: myRowData } = this.props;
    const axisVector = axis ? axis.vector : undefined;

    const cellFunctions = {
      swatch: data =>
        ReactDOMFactories.div({
          className: "w-100",
          style: {
            backgroundColor: data.key,
            height: 32,
            width: 64
          }
        }),
      decimal: data => `${data.r},${data.g},${data.b}`,
      magnitude: data => round2(data.magnitude),
      onAxis: data => {
        let onAxis;
        if (axisVector) {
          const colorVector = VectorUtils.unit(data.vector);
          onAxis = round4(VectorUtils.dot(colorVector, axisVector));
        }
        return onAxis;
      },
      offAxis: data => {
        let offAxis;
        if (axisVector) {
          const colorVector = VectorUtils.unit(data.vector);
          const myVector = VectorUtils.cross(colorVector, axisVector);
          offAxis = round4(VectorUtils.magnitude(myVector));
        }
        return offAxis;
      }
    };

    const defaultSort = {
      column: "onAxis",
      direction: "desc"
    };

    const table = React.createElement(DataTable, {
      cellFunctions,
      columns: TableColumns,
      rowData: myRowData,
      defaultSort
    });

    return ReactDOMFactories.div({ className: "center tc" }, table);
  }
}

ColorTable.propTypes = {
  rowData: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  axis: PropTypes.shape()
};

ColorTable.defaultProps = {
  axis: {}
};

export default ColorTable;
