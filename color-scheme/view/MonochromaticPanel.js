import Color from "../../artifact/Color.js";

import ColorSwatch from "./ColorSwatch.js";

const RU = ReactComponent.ReactUtilities;

class MonochromaticPanel extends React.Component {
  render() {
    const { color, varySaturation } = this.props;
    const count = 7 + (varySaturation ? 0 : 1);
    const max = count + (varySaturation ? 1 : 0);
    const rows = [];

    for (let i = 1; i < max; i += 1) {
      const s = varySaturation ? (i * 100) / count : color.s;
      const l = varySaturation ? color.l : (i * 100) / count;

      const myColor = Color.create({ h: color.h, s, l });
      const swatch = React.createElement(ColorSwatch, {
        color: myColor,
        showDescription: true,
      });
      const cell = RU.createCell(swatch, `swatchCell${i}`, "ph2");
      rows.push(RU.createRow(cell, `row${i}`));
    }

    return RU.createTable(
      rows,
      "monochromaticPanelTable",
      "center cs-bg-gray mh0 mv2 pv2"
    );
  }
}

MonochromaticPanel.propTypes = {
  color: PropTypes.shape().isRequired,

  varySaturation: PropTypes.bool,
};

MonochromaticPanel.defaultProps = {
  varySaturation: false,
};

export default MonochromaticPanel;
