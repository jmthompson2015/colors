import SplitComplementPanel from "../view/SplitComplementPanel.js";

const mapStateToProps = state => {
  const { color, complementLeft, complementRight } = state;

  return { color, complementLeft, complementRight };
};

export default ReactRedux.connect(mapStateToProps)(SplitComplementPanel);
