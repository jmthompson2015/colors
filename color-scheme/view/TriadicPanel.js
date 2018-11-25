import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class TriadicPanel extends React.Component {
  render() {
    const { color, triadicLeft, triadicRight } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true
    });
    const triadicLeftUI = React.createElement(ColorSwatch, {
      color: triadicLeft,
      showDescription: true,
      showTitle: true,
      title: "Triadic"
    });
    const triadicRightUI = React.createElement(ColorSwatch, {
      color: triadicRight,
      showDescription: true,
      showTitle: true,
      title: "Triadic"
    });

    const cellClassName = "ph2";
    const cell1 = ReactUtils.createCell(swatch, "swatchCell", cellClassName);
    const row1 = ReactUtils.createRow(cell1, "triadicRow1");
    const cells = [
      ReactUtils.createCell(triadicLeftUI, "triadicLeftCell", cellClassName),
      ReactUtils.createCell(triadicRightUI, "triadicRightCell", cellClassName)
    ];
    const row = ReactUtils.createRow(cells, "triadicRow");
    const table = ReactUtils.createTable(row, "triadicTable");
    const cell2 = ReactUtils.createCell(table, "triadicCell", cellClassName);
    const row2 = ReactUtils.createRow(cell2, "triadicPanelRow2");

    return ReactUtils.createTable([row1, row2], "triadicPanelTable", "cs-bg-gray ma2 pv2");
  }
}

TriadicPanel.propTypes = {
  color: PropTypes.shape().isRequired,
  triadicLeft: PropTypes.shape().isRequired,
  triadicRight: PropTypes.shape().isRequired
};

export default TriadicPanel;
