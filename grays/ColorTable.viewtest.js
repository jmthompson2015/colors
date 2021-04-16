import Color from "../artifact/Color.js";

import ColorTable from "./ColorTable.js";

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
  Color.BLACK
];
const element1 = React.createElement(ColorTable, { colors: colors1 });
ReactDOM.render(element1, document.getElementById("panel1"));

const colors2 = [
  Color.PLATINUM,
  Color.ASH_GRAY,
  Color.BATTLESHIP_GRAY,
  Color.NICKEL,
  Color.GUNMETAL,
  Color.CHARCOAL
];
const element2 = React.createElement(ColorTable, { colors: colors2 });
ReactDOM.render(element2, document.getElementById("panel2"));

const colors3 = [
  Color.BLUE_GRAY,
  Color.COOL_GRAY,
  Color.GLAUCOUS,
  Color.CADET_GRAY,
  Color.SLATE_GRAY,
  Color.GRAY_GREEN,
  Color.MARENGO
];
const element3 = React.createElement(ColorTable, { colors: colors3 });
ReactDOM.render(element3, document.getElementById("panel3"));

const colors4 = [
  Color.PUCE,
  Color.ROSE_QUARTZ,
  Color.CINEREOUS,
  Color.ROCKET_METALLIC,
  Color.TAUPE
];

const element4 = React.createElement(ColorTable, { colors: colors4 });
ReactDOM.render(element4, document.getElementById("panel4"));
