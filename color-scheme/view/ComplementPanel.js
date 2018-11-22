import ColorSwatch from "./ColorSwatch.js";
import ReactUtils from "./ReactUtilities.js";

class ComplementPanel extends React.Component {
  render() {
    const { color, complementary } = this.props;
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

    const cell0 = ReactUtils.createCell(swatch, "swatchCell", "ph2");
    const cell1 = ReactUtils.createCell(complementaryUI, "complementaryCell", "ph2 pt2");

    const row0 = ReactUtils.createRow(cell0, "row0");
    const row1 = ReactUtils.createRow(cell1, "row1");

    return ReactUtils.createTable([row0, row1], "complementPanelTable", "cs-bg-gray ma2 pv2");
  }
}

ComplementPanel.propTypes = {
  color: PropTypes.shape().isRequired,
  complementary: PropTypes.shape().isRequired
};

export default ComplementPanel;