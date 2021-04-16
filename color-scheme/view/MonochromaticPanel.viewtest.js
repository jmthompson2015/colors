import Color from "../../artifact/Color.js";

import MonochromaticPanel from "./MonochromaticPanel.js";

const createMonochromaticPanel = (color, varySaturation) =>
  React.createElement(MonochromaticPanel, { color, varySaturation });

const color1 = Color.RED;
const element1 = createMonochromaticPanel(color1, true);
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.YELLOW;
const element2 = createMonochromaticPanel(color2, true);
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.GREEN;
const element3 = createMonochromaticPanel(color3, true);
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.CYAN;
const element4 = createMonochromaticPanel(color4, true);
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.BLUE;
const element5 = createMonochromaticPanel(color5, true);
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.MAGENTA;
const element6 = createMonochromaticPanel(color6, true);
ReactDOM.render(element6, document.getElementById("panel6"));

const color7 = Color.RED;
const element7 = createMonochromaticPanel(color7);
ReactDOM.render(element7, document.getElementById("panel7"));

const color8 = Color.YELLOW;
const element8 = createMonochromaticPanel(color8);
ReactDOM.render(element8, document.getElementById("panel8"));

const color9 = Color.GREEN;
const element9 = createMonochromaticPanel(color9);
ReactDOM.render(element9, document.getElementById("panel9"));

const color10 = Color.CYAN;
const element10 = createMonochromaticPanel(color10);
ReactDOM.render(element10, document.getElementById("panel10"));

const color11 = Color.BLUE;
const element11 = createMonochromaticPanel(color11);
ReactDOM.render(element11, document.getElementById("panel11"));

const color12 = Color.MAGENTA;
const element12 = createMonochromaticPanel(color12);
ReactDOM.render(element12, document.getElementById("panel12"));
