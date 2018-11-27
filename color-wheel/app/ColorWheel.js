import Color from "../state/Color.js";

import ColorTable from "../view/ColorTable.js";
import RU from "../view/ReactUtilities.js";

const element0 = ReactDOMFactories.img({
  src: "../resource/RBG_color_wheel.png",
  width: 300,
  height: 260
});

const colors1 = [Color.RED, Color.GREEN, Color.BLUE, Color.MAROON, Color.DARK_GREEN, Color.NAVY];
const title1 = ReactDOMFactories.h2({}, "Primary Colors");
const element1 = React.createElement(ColorTable, { colors: colors1 });

const colors2 = [Color.YELLOW, Color.CYAN, Color.MAGENTA, Color.OLIVE, Color.TEAL, Color.PURPLE];
const title2 = ReactDOMFactories.h2({}, "Secondary Colors");
const subtitle2 = ReactDOMFactories.span({}, "Formed by the addition of primary colors.");
const element2 = React.createElement(ColorTable, { colors: colors2 });

const colors3 = [
  Color.ORANGE,
  Color.CHARTREUSE_GREEN,
  Color.SPRING_GREEN,
  Color.AZURE,
  Color.VIOLET,
  Color.ROSE
];
const title3 = ReactDOMFactories.h2({}, "Tertiary Colors");
const subtitle3 = ReactDOMFactories.span(
  {},
  "Formed by the addition of a primary and a secondary color."
);
const element3 = React.createElement(ColorTable, { colors: colors3 });

const cells = [
  RU.createCell(element0, "element0", "pa2"),
  RU.createCell([title1, element1], "element1", "pa2"),
  RU.createCell([title2, subtitle2, element2], "element2", "pa2"),
  RU.createCell([title3, subtitle3, element3], "element3", "pa2")
];

const element = RU.createFlexboxWrap(cells, "panel", "pa2");
ReactDOM.render(element, document.getElementById("panel"));
