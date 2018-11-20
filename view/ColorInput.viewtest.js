/* eslint no-console: ["error", { allow: ["log"] }] */

import Color from "../state/Color.js";

import ColorInput from "./ColorInput.js";

const myOnChange = color => {
  console.log(`myOnChange() color = ${JSON.stringify(color)}`);
};

const color = Color.create({ r: 255 });
const element = React.createElement(ColorInput, { color, onChange: myOnChange });
ReactDOM.render(element, document.getElementById("panel"));
