import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class AnalogPanel extends React.Component {
  render() {
    const { analogousLeft, analogousRight, color } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true
    });
    const analogousLeftUI = React.createElement(ColorSwatch, {
      color: analogousLeft,
      showDescription: true,
      showTitle: true,
      title: "Analog"
    });
    const analogousRightUI = React.createElement(ColorSwatch, {
      color: analogousRight,
      showDescription: true,
      showTitle: true,
      title: "Analog"
    });

    const cellClassName = "ph2";
    const cells = [
      ReactUtils.createCell(analogousLeftUI, "analogousLeftCell", cellClassName),
      ReactUtils.createCell(swatch, "swatchCell", cellClassName),
      ReactUtils.createCell(analogousRightUI, "analogousRightCell", cellClassName)
    ];
    const row = ReactUtils.createRow(cells, "analogPanelRow");

    return ReactUtils.createTable(row, "analogPanelTable", "cs-bg-gray ma2 pv2");
  }
}

AnalogPanel.propTypes = {
  analogousLeft: PropTypes.shape().isRequired,
  analogousRight: PropTypes.shape().isRequired,
  color: PropTypes.shape().isRequired
};

export default AnalogPanel;
