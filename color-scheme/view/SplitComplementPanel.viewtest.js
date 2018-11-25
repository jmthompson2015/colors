import Color from "../state/Color.js";
import ColorUtils from "../state/ColorUtilities.js";

import SplitComplementPanel from "./SplitComplementPanel.js";

const createSplitComplementPanel = color => {
  const complement = ColorUtils.complementary(color);
  return React.createElement(SplitComplementPanel, {
    color,
    complementLeft: ColorUtils.analogousLeft(complement),
    complementRight: ColorUtils.analogousRight(complement)
  });
};

const color1 = Color.RED;
const element1 = createSplitComplementPanel(color1);
ReactDOM.render(element1, document.getElementById("panel1"));

const color2 = Color.YELLOW;
const element2 = createSplitComplementPanel(color2);
ReactDOM.render(element2, document.getElementById("panel2"));

const color3 = Color.GREEN;
const element3 = createSplitComplementPanel(color3);
ReactDOM.render(element3, document.getElementById("panel3"));

const color4 = Color.CYAN;
const element4 = createSplitComplementPanel(color4);
ReactDOM.render(element4, document.getElementById("panel4"));

const color5 = Color.BLUE;
const element5 = createSplitComplementPanel(color5);
ReactDOM.render(element5, document.getElementById("panel5"));

const color6 = Color.MAGENTA;
const element6 = createSplitComplementPanel(color6);
ReactDOM.render(element6, document.getElementById("panel6"));
