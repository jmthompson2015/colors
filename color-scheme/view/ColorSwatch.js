import CU from "../../artifact/ColorUtilities.js";

const RU = ReactComponent.ReactUtilities;

class ColorSwatch extends React.Component {
  render() {
    const { color, height, showDescription, showTitle, width } = this.props;

    const swatch = ReactDOMFactories.div({
      className: "center mh0",
      style: { backgroundColor: CU.toStyle(color), height, width },
    });

    if (showTitle || showDescription) {
      const { descriptionClass, title, titleClass } = this.props;
      const rows = [];

      if (showTitle) {
        const titleUI = RU.createSpan(title);
        const cell0 = RU.createCell(titleUI, "titleCell", titleClass);
        rows.push(RU.createRow(cell0, "titleRow"));
      }

      const cell1 = RU.createCell(swatch, "swatchCell");
      rows.push(RU.createRow(cell1, "swatchRow"));

      if (showDescription) {
        const description = CU.toString(color);
        const descriptionUI = RU.createSpan(description);
        const cell2 = RU.createCell(
          descriptionUI,
          "descriptionCell",
          descriptionClass
        );
        rows.push(RU.createRow(cell2, "descriptionRow"));
      }

      return RU.createTable(rows, "colorSwatchTable", "center mh0");
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
  width: PropTypes.number,
};

ColorSwatch.defaultProps = {
  descriptionClass: "f6 tc",
  height: 25,
  showTitle: false,
  showDescription: false,
  title: "Color",
  titleClass: "b f5 tc",
  width: 110,
};

export default ColorSwatch;
