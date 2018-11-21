import CssNamedColor from "../model/CssNamedColor.js";
import EnumUtils from "../model/EnumUtilities.js";
import RGBAxis from "../model/RGBAxis.js";

import AxisSelect from "../view/AxisSelect.js";
import ColorTable from "../view/ColorTable.js";

let axisKey;
const rowData = EnumUtils.values(CssNamedColor);

function createColorTable() {
  const element = React.createElement(ColorTable, {
    axis: RGBAxis.properties[axisKey],
    rowData
  });

  ReactDOM.render(
    ReactDOMFactories.div(
      {
        className: "center tc"
      },
      element
    ),
    document.getElementById("colorPanel")
  );
}

createColorTable();

function axisChange() {
  const axisSelect = document.getElementById("axisSelect");
  const selected = axisSelect.options[axisSelect.selectedIndex].value;
  // console.log(`axisChange() selected = ${selected}`);

  axisKey = selected;
  createColorTable();
}

const axisSelect = React.createElement(AxisSelect, { onChange: axisChange });
ReactDOM.render(axisSelect, document.getElementById("selectPanel"));
