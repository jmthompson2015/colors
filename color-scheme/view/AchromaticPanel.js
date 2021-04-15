import ColorSwatch from "./ColorSwatch.js";

const RU = ReactComponent.ReactUtilities;

class AchromaticPanel extends React.Component {
  render() {
    const { achromatic, color } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true,
    });
    const achromaticUI = React.createElement(ColorSwatch, {
      color: achromatic,
      showDescription: true,
      showTitle: true,
      title: "Achromatic",
    });

    const cell0 = RU.createCell(swatch, "swatchCell", "ph2");
    const cell1 = RU.createCell(achromaticUI, "achromaticCell", "ph2 pt2");

    const row0 = RU.createRow(cell0, "row0");
    const row1 = RU.createRow(cell1, "row1");

    return RU.createTable(
      [row0, row1],
      "achromaticPanelTable",
      "cs-bg-gray ma2 pv2"
    );
  }
}

AchromaticPanel.propTypes = {
  achromatic: PropTypes.shape().isRequired,
  color: PropTypes.shape().isRequired,
};

export default AchromaticPanel;
