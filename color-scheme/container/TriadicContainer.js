import TriadicPanel from "../view/TriadicPanel.js";

const mapStateToProps = state => {
  const { color, triadicLeft, triadicRight } = state;

  return { color, triadicLeft, triadicRight };
};

export default ReactRedux.connect(mapStateToProps)(TriadicPanel);
