import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

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
    const cell1 = ReactUtils.createCell(swatch, "swatchCell", cellClassName);
    const row1 = ReactUtils.createRow(cell1, "splitComplementRow1");
    const cells = [
      ReactUtils.createCell(complementRightUI, "complementRightCell", cellClassName),
      ReactUtils.createCell(complementLeftUI, "complementLeftCell", cellClassName)
    ];
    const row = ReactUtils.createRow(cells, "splitComplementRow");
    const table = ReactUtils.createTable(row, "splitComplementTable");
    const cell2 = ReactUtils.createCell(table, "splitComplementCell", cellClassName);
    const row2 = ReactUtils.createRow(cell2, "splitComplementPanelRow2");

    return ReactUtils.createTable([row1, row2], "splitComplementPanelTable", "cs-bg-gray ma2 pv2");
  }
}

SplitComplementPanel.propTypes = {
  color: PropTypes.shape().isRequired,
  complementLeft: PropTypes.shape().isRequired,
  complementRight: PropTypes.shape().isRequired
};

export default SplitComplementPanel;
