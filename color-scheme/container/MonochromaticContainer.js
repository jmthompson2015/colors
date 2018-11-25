import MonochromaticPanel from "../view/MonochromaticPanel.js";

const mapStateToProps = (state, ownProps) => {
  const { color } = state;
  const { varySaturation } = ownProps;

  return { color, varySaturation };
};

export default ReactRedux.connect(mapStateToProps)(MonochromaticPanel);
