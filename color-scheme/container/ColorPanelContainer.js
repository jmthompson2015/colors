import ColorPanel from "../view/ColorPanel.js";

const mapStateToProps = state => {
  const { achromatic, analogousLeft, analogousRight, color, complementary } = state;

  return { achromatic, analogousLeft, analogousRight, color, complementary };
};

export default ReactRedux.connect(mapStateToProps)(ColorPanel);
