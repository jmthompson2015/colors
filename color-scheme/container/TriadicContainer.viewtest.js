import Color from "../../artifact/Color.js";

import ActionCreator from "../state/ActionCreator.js";
import Reducer from "../state/Reducer.js";

import TriadicContainer from "./TriadicContainer.js";

const store = Redux.createStore(Reducer.root);
store.dispatch(ActionCreator.setColor(Color.RED));

const container = React.createElement(TriadicContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
