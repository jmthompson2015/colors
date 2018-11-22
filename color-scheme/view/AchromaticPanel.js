import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class AchromaticPanel extends React.Component {
  render() {
    const { achromatic, color } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true
    });
    const achromaticUI = React.createElement(ColorSwatch, {
      color: achromatic,
      showDescription: true,
      showTitle: true,
      title: "Achromatic"
    });

    const cell0 = ReactUtils.createCell(swatch, "swatchCell", "ph2");
    const cell1 = ReactUtils.createCell(achromaticUI, "achromaticCell", "ph2 pt2");

    const row0 = ReactUtils.createRow(cell0, "row0");
    const row1 = ReactUtils.createRow(cell1, "row1");

    return ReactUtils.createTable([row0, row1], "achromaticPanelTable", "bg-silver ma2 pv2");
  }
}

AchromaticPanel.propTypes = {
  achromatic: PropTypes.shape().isRequired,
  color: PropTypes.shape().isRequired
};

export default AchromaticPanel;
