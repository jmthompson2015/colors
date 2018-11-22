import AchromaticPanel from "../view/AchromaticPanel.js";

const mapStateToProps = state => {
  const { achromatic, color } = state;

  return { achromatic, color };
};

export default ReactRedux.connect(mapStateToProps)(AchromaticPanel);
