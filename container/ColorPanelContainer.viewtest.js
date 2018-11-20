import Reducer from "../state/Reducer.js";

import ColorPanelContainer from "./ColorPanelContainer.js";

const store = Redux.createStore(Reducer.root);

const container = React.createElement(ColorPanelContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
