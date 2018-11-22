import AnalogPanel from "../view/AnalogPanel.js";

const mapStateToProps = state => {
  const { analogousLeft, analogousRight, color } = state;

  return { analogousLeft, analogousRight, color };
};

export default ReactRedux.connect(mapStateToProps)(AnalogPanel);
