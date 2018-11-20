const AppState = {};

AppState.create = ({ color, complementary, analogousLeft, analogousRight, achromatic } = {}) =>
  Immutable({
    color,
    complementary,
    analogousLeft,
    analogousRight,
    achromatic
  });

Object.freeze(AppState);

export default AppState;
