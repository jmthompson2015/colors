import Color from "../../artifact/Color.js";

import ColorSwatch from "./ColorSwatch.js";

const color1 = Color.RED;
const element1 = React.createElement(ColorSwatch, {
  color: color1,
  showDescription: true,
  showTitle: true
});
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.GREEN;
const element2 = React.createElement(ColorSwatch, {
  color: color2,
  showTitle: true
});
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.BLUE;
const element3 = React.createElement(ColorSwatch, {
  color: color3,
  showDescription: true
});
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.YELLOW;
const element4 = React.createElement(ColorSwatch, {
  color: color4,
  showDescription: true,
  showTitle: true,
  title: "Yellow"
});
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.CYAN;
const element5 = React.createElement(ColorSwatch, {
  color: color5,
  showTitle: true,
  title: "Cyan"
});
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.MAGENTA;
const element6 = React.createElement(ColorSwatch, {
  color: color6,
  showDescription: true
});
ReactDOM.render(element6, document.getElementById("panel6"));

const color7 = Color.BLACK;
const element7 = React.createElement(ColorSwatch, {
  color: color7,
  showDescription: true
});
ReactDOM.render(element7, document.getElementById("panel7"));

const color8 = Color.GRAY;
const element8 = React.createElement(ColorSwatch, {
  color: color8,
  showDescription: true
});
ReactDOM.render(element8, document.getElementById("panel8"));

const color9 = Color.WHITE;
const element9 = React.createElement(ColorSwatch, {
  color: color9,
  showDescription: true
});
ReactDOM.render(element9, document.getElementById("panel9"));
