import ComplementPanel from "../view/ComplementPanel.js";

const mapStateToProps = state => {
  const { color, complementary } = state;

  return { color, complementary };
};

export default ReactRedux.connect(mapStateToProps)(ComplementPanel);
