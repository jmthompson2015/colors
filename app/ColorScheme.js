import ActionCreator from "../state/ActionCreator.js";
import Color from "../state/Color.js";
import Reducer from "../state/Reducer.js";

import ColorInputContainer from "../container/ColorInputContainer.js";
import ColorPanelContainer from "../container/ColorPanelContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setColor(Color.RED));

const container0 = React.createElement(ColorInputContainer);
const element0 = React.createElement(ReactRedux.Provider, { store }, container0);
ReactDOM.render(element0, document.getElementById("inputPanel"));

const container1 = React.createElement(ColorPanelContainer);
const element1 = React.createElement(ReactRedux.Provider, { store }, container1);
ReactDOM.render(element1, document.getElementById("colorPanel"));
