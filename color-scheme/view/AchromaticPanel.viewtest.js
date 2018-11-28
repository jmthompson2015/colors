import Color from "../../model/Color.js";
import CU from "../../model/ColorUtilities.js";

import AchromaticPanel from "./AchromaticPanel.js";

const createAchromaticPanel = color =>
  React.createElement(AchromaticPanel, {
    color,
    achromatic: CU.achromatic(color)
  });

const color1 = Color.create({ l: 12 });
const element1 = createAchromaticPanel(color1);
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.create({ h: 60, l: 25 });
const element2 = createAchromaticPanel(color2);
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.GREEN;
const element3 = createAchromaticPanel(color3);
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.create({ h: 180, l: 12 });
const element4 = createAchromaticPanel(color4);
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.create({ h: 240, l: 25 });
const element5 = createAchromaticPanel(color5);
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.MAGENTA;
const element6 = createAchromaticPanel(color6);
ReactDOM.render(element6, document.getElementById("panel6"));
