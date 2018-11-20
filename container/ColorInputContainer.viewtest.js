import Reducer from "../state/Reducer.js";

import ColorInputContainer from "./ColorInputContainer.js";

const store = Redux.createStore(Reducer.root);

const container = React.createElement(ColorInputContainer);
const element = React.createElement(ReactRedux.Provider, { store }, container);

ReactDOM.render(element, document.getElementById("panel"));
