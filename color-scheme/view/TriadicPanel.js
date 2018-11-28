import RU from "../../view/ReactUtilities.js";

import ColorSwatch from "./ColorSwatch.js";

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
    const cell1 = RU.createCell(swatch, "swatchCell", cellClassName);
    const row1 = RU.createRow(cell1, "triadicRow1");
    const cells = [
      RU.createCell(triadicLeftUI, "triadicLeftCell", cellClassName),
      RU.createCell(triadicRightUI, "triadicRightCell", cellClassName)
    ];
    const row = RU.createRow(cells, "triadicRow");
    const table = RU.createTable(row, "triadicTable");
    const cell2 = RU.createCell(table, "triadicCell", cellClassName);
    const row2 = RU.createRow(cell2, "triadicPanelRow2");

    return RU.createTable([row1, row2], "triadicPanelTable", "cs-bg-gray ma2 pv2");
  }
}

TriadicPanel.propTypes = {
  color: PropTypes.shape().isRequired,
  triadicLeft: PropTypes.shape().isRequired,
  triadicRight: PropTypes.shape().isRequired
};

export default TriadicPanel;
