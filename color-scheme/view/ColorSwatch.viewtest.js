import Color from "../state/Color.js";

import ColorSwatch from "./ColorSwatch.js";

const color1 = Color.create({ r: 255 });
const element1 = React.createElement(ColorSwatch, {
  color: color1,
  showDescription: true,
  showTitle: true
});
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.create({ g: 255 });
const element2 = React.createElement(ColorSwatch, {
  color: color2,
  showTitle: true
});
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.create({ b: 255 });
const element3 = React.createElement(ColorSwatch, {
  color: color3,
  showDescription: true
});
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.create({ r: 255, g: 255 });
const element4 = React.createElement(ColorSwatch, {
  color: color4,
  showDescription: true,
  showTitle: true,
  title: "Yellow"
});
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.create({ g: 255, b: 255 });
const element5 = React.createElement(ColorSwatch, {
  color: color5,
  showTitle: true,
  title: "Cyan"
});
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.create({ r: 255, b: 255 });
const element6 = React.createElement(ColorSwatch, {
  color: color6,
  showDescription: true
});
ReactDOM.render(element6, document.getElementById("panel6"));
