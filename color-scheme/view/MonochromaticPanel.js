import Color from "../state/Color.js";

import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class MonochromaticPanel extends React.Component {
  render() {
    const { color, varySaturation } = this.props;
    const myProps = { showDescription: true, title: "Monochromatic" };
    const count = 7 + (varySaturation ? 0 : 1);
    const max = count + (varySaturation ? 1 : 0);
    let showTitle = true;
    const rows = [];

    for (let i = 1; i < max; i += 1) {
      const s = varySaturation ? (i * 100) / count : color.s;
      const l = varySaturation ? color.l : (i * 100) / count;

      const myColor = Color.create({ h: color.h, s, l });
      const swatch = React.createElement(
        ColorSwatch,
        R.merge(myProps, { color: myColor, showTitle })
      );
      const cell = ReactUtils.createCell(swatch, `swatchCell${i}`, "ph2");
      rows.push(ReactUtils.createRow(cell, `row${i}`));
      showTitle = false;
    }

    return ReactUtils.createTable(rows, "monochromaticPanelTable", "cs-bg-gray ma2 pv2");
  }
}

MonochromaticPanel.propTypes = {
  color: PropTypes.shape().isRequired,

  varySaturation: PropTypes.bool
};

MonochromaticPanel.defaultProps = {
  varySaturation: false
};

export default MonochromaticPanel;
