import Color from "../state/Color.js";

import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class MonochromaticPanel extends React.Component {
  render() {
    const { color } = this.props;
    const myProps = {
      height: 25,
      showDescription: true,
      title: "Monochromatic",
      width: 110
    };
    const count = 8;
    const rows = [];

    for (let i = 1; i < count; i += 1) {
      const l = (i * 100) / count;
      const myColor = Color.create({ h: color.h, s: color.s, l });
      const swatch = React.createElement(
        ColorSwatch,
        R.merge(myProps, { color: Color.create(myColor), showTitle: i === 1 })
      );
      const cell = ReactUtils.createCell(swatch, `swatchCell${i}`, "ph2");
      rows.push(ReactUtils.createRow(cell, `row${i}`));
    }

    return ReactUtils.createTable(rows, "monochromaticPanelTable", "cs-bg-gray ma2 pv2");
  }
}

MonochromaticPanel.propTypes = {
  color: PropTypes.shape().isRequired
};

export default MonochromaticPanel;
