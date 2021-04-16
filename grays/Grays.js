import Color from "../artifact/Color.js";

import ColorTable from "./ColorTable.js";

const RU = ReactComponent.ReactUtilities;

const colors1 = [
  Color.WHITE,
  Color.GAINSBORO,
  Color.LIGHT_GRAY,
  Color.SILVER,
  Color.SPANISH_GRAY,
  Color.GRAY,
  Color.DIM_GRAY,
  Color.DAVYS_GRAY,
  Color.JET,
  Color.BLACK,
];
const title1 = ReactDOMFactories.h2({}, "Achromatic Grays");
const subtitle1 = ReactDOMFactories.span({}, "Formed with equal RGB values.");
const element1 = React.createElement(ColorTable, { colors: colors1 });

const colors2 = [
  Color.PLATINUM,
  Color.ASH_GRAY,
  Color.BATTLESHIP_GRAY,
  Color.NICKEL,
  Color.CHARCOAL,
  Color.GUNMETAL,
];
const title2 = ReactDOMFactories.h2({}, "Off-Grays");
const subtitle2 = ReactDOMFactories.span(
  {},
  "Whose red, green, and blue color codes are not exactly equal."
);
const element2 = React.createElement(ColorTable, { colors: colors2 });

const colors3 = [
  Color.COOL_GRAY,
  Color.CADET_GRAY,
  Color.BLUE_GRAY,
  Color.GLAUCOUS,
  Color.SLATE_GRAY,
  Color.GRAY_GREEN,
  Color.MARENGO,
];
const title3 = ReactDOMFactories.h2({}, "Cool Grays");
const subtitle3 = ReactDOMFactories.span(
  {},
  "Blueish gray, grayish cyan, greenish gray, or violetish gray."
);
const element3 = React.createElement(ColorTable, { colors: colors3 });

const colors4 = [
  Color.PUCE,
  Color.ROSE_QUARTZ,
  Color.CINEREOUS,
  Color.ROCKET_METALLIC,
  Color.TAUPE,
];
const title4 = ReactDOMFactories.h2({}, "Warm Grays");
const subtitle4 = ReactDOMFactories.span(
  {},
  "Brownish, pinkish grays, or reddish purple grays."
);
const element4 = React.createElement(ColorTable, { colors: colors4 });

const cells = [
  RU.createCell([title1, subtitle1, element1], "element1", "pa2"),
  RU.createCell([title2, subtitle2, element2], "element2", "pa2"),
  RU.createCell([title3, subtitle3, element3], "element3", "pa2"),
  RU.createCell([title4, subtitle4, element4], "element4", "pa2"),
];

const element = RU.createFlexboxWrap(cells, "panel");
ReactDOM.render(element, document.getElementById("panel"));
