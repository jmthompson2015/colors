import ColorSwatch from "./ColorSwatch.js";

const RU = ReactComponent.ReactUtilities;

class ComplementPanel extends React.Component {
  render() {
    const { color, complement } = this.props;
    const swatch = React.createElement(ColorSwatch, {
      color,
      showDescription: true,
      showTitle: true,
    });
    const complementUI = React.createElement(ColorSwatch, {
      color: complement,
      showDescription: true,
      showTitle: true,
      title: "Complement",
    });

    const cell0 = RU.createCell(swatch, "swatchCell", "ph2");
    const cell1 = RU.createCell(complementUI, "complementCell", "ph2 pt2");

    const row0 = RU.createRow(cell0, "row0");
    const row1 = RU.createRow(cell1, "row1");

    return RU.createTable(
      [row0, row1],
      "complementPanelTable",
      "center cs-bg-gray mh0 mv2 pv2"
    );
  }
}

ComplementPanel.propTypes = {
  color: PropTypes.shape().isRequired,
  complement: PropTypes.shape().isRequired,
};

export default ComplementPanel;
