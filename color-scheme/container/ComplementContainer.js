import ComplementPanel from "../view/ComplementPanel.js";

const mapStateToProps = state => {
  const { color, complement } = state;

  return { color, complement };
};

export default ReactRedux.connect(mapStateToProps)(ComplementPanel);
