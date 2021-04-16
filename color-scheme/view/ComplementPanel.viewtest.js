import Color from "../../artifact/Color.js";
import CU from "../../artifact/ColorUtilities.js";

import ComplementPanel from "./ComplementPanel.js";

const createComplementPanel = color =>
  React.createElement(ComplementPanel, {
    color,
    complement: CU.complementary(color)
  });

const color1 = Color.RED;
const element1 = createComplementPanel(color1);
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.YELLOW;
const element2 = createComplementPanel(color2);
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.GREEN;
const element3 = createComplementPanel(color3);
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.CYAN;
const element4 = createComplementPanel(color4);
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.BLUE;
const element5 = createComplementPanel(color5);
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.MAGENTA;
const element6 = createComplementPanel(color6);
ReactDOM.render(element6, document.getElementById("panel6"));
