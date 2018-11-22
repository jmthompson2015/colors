import Color from "../state/Color.js";
import ColorUtils from "../state/ColorUtilities.js";

import AnalogPanel from "./AnalogPanel.js";

const createAnalogPanel = color =>
  React.createElement(AnalogPanel, {
    color,
    achromatic: ColorUtils.achromatic(color),
    analogousLeft: ColorUtils.analogousLeft(color),
    analogousRight: ColorUtils.analogousRight(color),
    complementary: ColorUtils.complementary(color)
  });

const color1 = Color.create({ r: 255 });
const element1 = createAnalogPanel(color1);
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.create({ r: 255, g: 255 });
const element2 = createAnalogPanel(color2);
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.create({ g: 255 });
const element3 = createAnalogPanel(color3);
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.create({ g: 255, b: 255 });
const element4 = createAnalogPanel(color4);
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.create({ b: 255 });
const element5 = createAnalogPanel(color5);
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.create({ r: 255, b: 255 });
const element6 = createAnalogPanel(color6);
ReactDOM.render(element6, document.getElementById("panel6"));