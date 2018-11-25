import Color from "../state/Color.js";
import CU from "../state/ColorUtilities.js";

import TriadicPanel from "./TriadicPanel.js";

const createTriadicPanel = color =>
  React.createElement(TriadicPanel, {
    color,
    triadicLeft: CU.triadicLeft(color),
    triadicRight: CU.triadicRight(color)
  });

const color1 = Color.RED;
const element1 = createTriadicPanel(color1);
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.YELLOW;
const element2 = createTriadicPanel(color2);
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.GREEN;
const element3 = createTriadicPanel(color3);
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.CYAN;
const element4 = createTriadicPanel(color4);
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.BLUE;
const element5 = createTriadicPanel(color5);
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.MAGENTA;
const element6 = createTriadicPanel(color6);
ReactDOM.render(element6, document.getElementById("panel6"));
