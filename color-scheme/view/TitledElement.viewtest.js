import Color from "../../model/Color.js";

import AchromaticPanel from "./AchromaticPanel.js";
import ComplementPanel from "./ComplementPanel.js";
import MonochromaticPanel from "./MonochromaticPanel.js";
import SplitComplementPanel from "./SplitComplementPanel.js";
import TitledElement from "./TitledElement.js";

const element1 = React.createElement(MonochromaticPanel, { color: Color.RED });
const titledElement1 = React.createElement(TitledElement, {
  title: "Monochromatic Colors",
  element: element1
});
ReactDOM.render(titledElement1, document.getElementById("panel1"));

const element2 = React.createElement(ComplementPanel, { color: Color.RED, complement: Color.CYAN });
const titledElement2 = React.createElement(TitledElement, {
  title: "Complementary Color",
  element: element2
});
ReactDOM.render(titledElement2, document.getElementById("panel2"));

const element3 = React.createElement(SplitComplementPanel, {
  color: Color.RED,
  complementLeft: Color.SPRING_GREEN,
  complementRight: Color.AZURE
});
const titledElement3 = React.createElement(TitledElement, {
  title: "Split-Complementary Colors",
  element: element3
});
ReactDOM.render(titledElement3, document.getElementById("panel3"));

const element4 = React.createElement(AchromaticPanel, {
  color: Color.RED,
  achromatic: Color.WHITE
});
const titledElement4 = React.createElement(TitledElement, {
  title: "Achromatic Color",
  element: element4
});
ReactDOM.render(titledElement4, document.getElementById("panel4"));
