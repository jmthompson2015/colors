import ActionCreator from "../state/ActionCreator.js";

import ColorInput from "../view/ColorInput.js";

const mapStateToProps = state => ({ color: state.color });

const mapDispatchToProps = dispatch => ({
  onChange: color => {
    dispatch(ActionCreator.setColor(color));
  }
});

export default ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorInput);
