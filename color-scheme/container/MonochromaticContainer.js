import MonochromaticPanel from "../view/MonochromaticPanel.js";

const mapStateToProps = state => {
  const { color } = state;

  return { color };
};

export default ReactRedux.connect(mapStateToProps)(MonochromaticPanel);
