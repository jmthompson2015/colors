/* eslint no-console: ["error", { allow: ["log"] }] */

import AxisSelect from "./AxisSelect.js";

const axisKey = "green";
const myOnChange = axis0 => {
  console.log(`myOnChange() axis0 = ${JSON.stringify(axis0)}`);
};

const element = React.createElement(AxisSelect, {
  onChange: myOnChange,
  axisKey
});
ReactDOM.render(element, document.getElementById("panel"));
