import Color from "../../model/Color.js";

import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TitledElement from "../view/TitledElement.js";

import AchromaticContainer from "../container/AchromaticContainer.js";
import AnalogContainer from "../container/AnalogContainer.js";
import ColorInputContainer from "../container/ColorInputContainer.js";
import ComplementContainer from "../container/ComplementContainer.js";
import MonochromaticContainer from "../container/MonochromaticContainer.js";
import SplitComplementContainer from "../container/SplitComplementContainer.js";
import TriadicContainer from "../container/TriadicContainer.js";

const RU = ReactComponent.ReactUtilities;

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setColor(Color.RED));

const teClassName = "bg-light-gray ma1";

const container0 = React.createElement(ColorInputContainer);
const element0 = React.createElement(
  ReactRedux.Provider,
  { store },
  container0
);
ReactDOM.render(element0, document.getElementById("inputPanel"));

const container1 = React.createElement(MonochromaticContainer, {
  varySaturation: true,
});
const element1 = React.createElement(
  ReactRedux.Provider,
  { store },
  container1
);
const titledElement1 = React.createElement(TitledElement, {
  key: "titledElement1",
  className: teClassName,
  element: element1,
  title: "Monochromatic Colors",
});

const container2 = React.createElement(MonochromaticContainer);
const element2 = React.createElement(
  ReactRedux.Provider,
  { store },
  container2
);
const titledElement2 = React.createElement(TitledElement, {
  key: "titledElement2",
  className: teClassName,
  element: element2,
  title: "Monochromatic Colors",
});

const container3 = React.createElement(ComplementContainer);
const element3 = React.createElement(
  ReactRedux.Provider,
  { store },
  container3
);
const titledElement3 = React.createElement(TitledElement, {
  key: "titledElement3",
  className: teClassName,
  element: element3,
  title: "Complementary Color",
});

const container4 = React.createElement(SplitComplementContainer);
const element4 = React.createElement(
  ReactRedux.Provider,
  { store },
  container4
);
const titledElement4 = React.createElement(TitledElement, {
  key: "titledElement4",
  className: teClassName,
  element: element4,
  title: "Split-Complementary Colors",
});

const container5 = React.createElement(AchromaticContainer);
const element5 = React.createElement(
  ReactRedux.Provider,
  { store },
  container5
);
const titledElement5 = React.createElement(TitledElement, {
  key: "titledElement5",
  className: teClassName,
  element: element5,
  title: "Achromatic Color",
});

const container6 = React.createElement(AnalogContainer);
const element6 = React.createElement(
  ReactRedux.Provider,
  { store },
  container6
);
const titledElement6 = React.createElement(TitledElement, {
  key: "titledElement6",
  className: teClassName,
  element: element6,
  title: "Analogous Colors",
});

const container7 = React.createElement(TriadicContainer);
const element7 = React.createElement(
  ReactRedux.Provider,
  { store },
  container7
);
const titledElement7 = React.createElement(TitledElement, {
  key: "titledElement7",
  className: teClassName,
  element: element7,
  title: "Triadic Colors",
});

const table = RU.createFlexboxWrap([
  titledElement1,
  titledElement2,
  titledElement3,
  titledElement4,
  titledElement5,
  titledElement6,
  titledElement7,
]);
ReactDOM.render(table, document.getElementById("colorPanel"));
