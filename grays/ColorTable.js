import CU from "../model/ColorUtilities.js";

const RU = ReactComponent.ReactUtilities;

const createHeaderRow = () => {
  const headerClass = "b ba b--gray cw-bg-dark-green pa1 tc v-mid white";
  const cells = [
    RU.createCell("Color", "colorHeaderCell", headerClass),
    RU.createCell("Name", "nameHeaderCell", headerClass),
    RU.createCell("HSL", "hslHeaderCell", headerClass),
    RU.createCell("RGB", "rgbHeaderCell", headerClass),
  ];

  return RU.createRow(cells, "headerRow");
};

const createRow = (color) => {
  const swatch = ReactDOMFactories.div({
    className: "m0 p0 w-100",
    style: { backgroundColor: CU.toStyle(color), height: 25 },
  });
  const rgb = CU.hslToRgb(color.h, color.s, color.l);
  const cellClass = "b--gray ba v-mid";
  const cells = [
    RU.createCell(swatch, "colorCell", cellClass),
    RU.createCell(color.name, "nameCell", `${cellClass} pa1`),
    RU.createCell(CU.toString(color), "hslCell", `${cellClass} pa1 tc`),
    RU.createCell(CU.toStringRgb(rgb), "rgbCell", `${cellClass} pa1 tc`),
  ];

  return RU.createRow(cells, `row${CU.toString(color)}`);
};

class ColorTable extends React.Component {
  render() {
    const { colors } = this.props;

    const headerRow = createHeaderRow();
    const rows0 = R.map(createRow, colors);
    const rows = R.concat([headerRow], rows0);

    return RU.createTable(rows, "colorTableTable", "ba f6");
  }
}

ColorTable.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ColorTable;
