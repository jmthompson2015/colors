import RU from "../../view/ReactUtilities.js";

import ColorSwatch from "./ColorSwatch.js";

class SplitComplementPanel extends React.Component {
  render() {
    const { color, complementLeft, complementRight } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true
    });
    const complementLeftUI = React.createElement(ColorSwatch, {
      color: complementLeft,
      showDescription: true,
      showTitle: true,
      title: "Split Complement"
    });
    const complementRightUI = React.createElement(ColorSwatch, {
      color: complementRight,
      showDescription: true,
      showTitle: true,
      title: "Split Complement"
    });

    const cellClassName = "ph2";
    const cell1 = RU.createCell(swatch, "swatchCell", cellClassName);
    const row1 = RU.createRow(cell1, "splitComplementRow1");
    const cells = [
      RU.createCell(complementRightUI, "complementRightCell", cellClassName),
      RU.createCell(complementLeftUI, "complementLeftCell", cellClassName)
    ];
    const row = RU.createRow(cells, "splitComplementRow");
    const table = RU.createTable(row, "splitComplementTable");
    const cell2 = RU.createCell(table, "splitComplementCell", cellClassName);
    const row2 = RU.createRow(cell2, "splitComplementPanelRow2");

    return RU.createTable([row1, row2], "splitComplementPanelTable", "cs-bg-gray ma2 pv2");
  }
}

SplitComplementPanel.propTypes = {
  color: PropTypes.shape().isRequired,
  complementLeft: PropTypes.shape().isRequired,
  complementRight: PropTypes.shape().isRequired
};

export default SplitComplementPanel;
