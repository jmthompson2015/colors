import ColorUtils from "../state/ColorUtilities.js";

import ReactUtils from "./ReactUtilities.js";

class ColorSwatch extends React.Component {
  render() {
    const { color, height, showDescription, showTitle, width } = this.props;

    const swatch = ReactDOMFactories.div({
      className: "center mh0",
      style: { backgroundColor: ColorUtils.toStyle(color), height, width }
    });

    if (showTitle || showDescription) {
      const { descriptionClass, title, titleClass } = this.props;
      const rows = [];

      if (showTitle) {
        const titleUI = ReactUtils.createSpan(title);
        const cell0 = ReactUtils.createCell(titleUI, "titleCell", titleClass);
        rows.push(ReactUtils.createRow(cell0, "titleRow"));
      }

      const cell1 = ReactUtils.createCell(swatch, "swatchCell");
      rows.push(ReactUtils.createRow(cell1, "swatchRow"));

      if (showDescription) {
        const description = ColorUtils.toString(color);
        const descriptionUI = ReactUtils.createSpan(description);
        const cell2 = ReactUtils.createCell(descriptionUI, "descriptionCell", descriptionClass);
        rows.push(ReactUtils.createRow(cell2, "descriptionRow"));
      }

      return ReactUtils.createTable(rows, "colorSwatchTable");
    }

    return swatch;
  }
}

ColorSwatch.propTypes = {
  color: PropTypes.shape().isRequired,

  descriptionClass: PropTypes.string,
  height: PropTypes.number,
  showDescription: PropTypes.bool,
  showTitle: PropTypes.bool,
  title: PropTypes.string,
  titleClass: PropTypes.string,
  width: PropTypes.number
};

ColorSwatch.defaultProps = {
  descriptionClass: "tc",
  height: 40,
  showTitle: false,
  showDescription: false,
  title: "Color",
  titleClass: "b tc",
  width: 64.7212 // height * 1.61803 (golden ratio)
};

export default ColorSwatch;
