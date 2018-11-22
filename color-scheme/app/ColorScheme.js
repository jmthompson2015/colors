import ActionCreator from "../state/ActionCreator.js";
import Color from "../state/Color.js";
import Reducer from "../state/Reducer.js";

import ReactUtils from "../view/ReactUtilities.js";

import AchromaticContainer from "../container/AchromaticContainer.js";
import AnalogContainer from "../container/AnalogContainer.js";
import ColorInputContainer from "../container/ColorInputContainer.js";
import ComplementContainer from "../container/ComplementContainer.js";
import MonochromaticContainer from "../container/MonochromaticContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setColor(Color.RED));

const container0 = React.createElement(ColorInputContainer);
const element0 = React.createElement(ReactRedux.Provider, { store }, container0);
ReactDOM.render(element0, document.getElementById("inputPanel"));

const container1 = React.createElement(MonochromaticContainer);
const element1 = React.createElement(ReactRedux.Provider, { key: "element1", store }, container1);

const container2 = React.createElement(ComplementContainer);
const element2 = React.createElement(ReactRedux.Provider, { key: "element2", store }, container2);

const container3 = React.createElement(AnalogContainer);
const element3 = React.createElement(ReactRedux.Provider, { key: "element3", store }, container3);

const container4 = React.createElement(AchromaticContainer);
const element4 = React.createElement(ReactRedux.Provider, { key: "element4", store }, container4);

const table = ReactUtils.createFlexboxWrap([element1, element2, element3, element4]);
ReactDOM.render(table, document.getElementById("colorPanel"));
