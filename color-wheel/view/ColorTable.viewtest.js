import Color from "../state/Color.js";

import ColorTable from "./ColorTable.js";

const colors1 = [Color.RED, Color.GREEN, Color.BLUE, Color.MAROON, Color.DARK_GREEN, Color.NAVY];
const element1 = React.createElement(ColorTable, { colors: colors1 });
ReactDOM.render(element1, document.getElementById("panel1"));

const colors2 = [Color.YELLOW, Color.CYAN, Color.MAGENTA, Color.OLIVE, Color.TEAL, Color.PURPLE];
const element2 = React.createElement(ColorTable, { colors: colors2 });
ReactDOM.render(element2, document.getElementById("panel2"));

const colors3 = [
  Color.ORANGE,
  Color.CHARTREUSE_GREEN,
  Color.SPRING_GREEN,
  Color.AZURE,
  Color.VIOLET,
  Color.ROSE
];
const element3 = React.createElement(ColorTable, { colors: colors3 });
ReactDOM.render(element3, document.getElementById("panel3"));
