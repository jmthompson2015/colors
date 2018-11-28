import RU from "../../view/ReactUtilities.js";

import ColorSwatch from "./ColorSwatch.js";

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
      RU.createCell(analogousLeftUI, "analogousLeftCell", cellClassName),
      RU.createCell(swatch, "swatchCell", cellClassName),
      RU.createCell(analogousRightUI, "analogousRightCell", cellClassName)
    ];
    const row = RU.createRow(cells, "analogPanelRow");

    return RU.createTable(row, "analogPanelTable", "cs-bg-gray ma2 pv2");
  }
}

AnalogPanel.propTypes = {
  analogousLeft: PropTypes.shape().isRequired,
  analogousRight: PropTypes.shape().isRequired,
  color: PropTypes.shape().isRequired
};

export default AnalogPanel;
