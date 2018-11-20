import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class ColorPanel extends React.Component {
  render() {
    const { achromatic, analogousLeft, analogousRight, color, complementary } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true
    });
    const complementaryUI = React.createElement(ColorSwatch, {
      color: complementary,
      showDescription: true,
      showTitle: true,
      title: "Complement"
    });
    const analogousLeftUI = React.createElement(ColorSwatch, {
      color: analogousLeft,
      showDescription: true,
      showTitle: true,
      title: "Analog (left)"
    });
    const analogousRightUI = React.createElement(ColorSwatch, {
      color: analogousRight,
      showDescription: true,
      showTitle: true,
      title: "Analog (right)"
    });
    const achromaticUI = React.createElement(ColorSwatch, {
      color: achromatic,
      showDescription: true,
      showTitle: true,
      title: "Achromatic"
    });

    const cellClassName = "center mh0 pa1 tc";
    const cells0 = [
      ReactUtils.createCell(analogousLeftUI, "analogousLeftCell", cellClassName),
      ReactUtils.createCell(swatch, "swatchCell", cellClassName),
      ReactUtils.createCell(analogousRightUI, "analogousRightCell", cellClassName),
      ReactUtils.createCell(achromaticUI, "achromaticCell", cellClassName)
    ];
    const row0 = ReactUtils.createRow(cells0, "row0");
    const cells1 = [
      ReactUtils.createCell(" ", "blankCell1", cellClassName),
      ReactUtils.createCell(complementaryUI, "complementaryCell", cellClassName),
      ReactUtils.createCell(" ", "blankCell2", cellClassName)
    ];
    const row1 = ReactUtils.createRow(cells1, "row1");

    return ReactUtils.createTable([row0, row1], "colorPanelTable", "cs-bg-gray");
  }
}

ColorPanel.propTypes = {
  achromatic: PropTypes.shape().isRequired,
  analogousLeft: PropTypes.shape().isRequired,
  analogousRight: PropTypes.shape().isRequired,
  color: PropTypes.shape().isRequired,
  complementary: PropTypes.shape().isRequired
};

ColorPanel.defaultProps = {};

export default ColorPanel;
