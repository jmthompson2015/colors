const AppState = {};

AppState.create = ({
  color,
  achromatic,
  analogousLeft,
  analogousRight,
  complement,
  complementLeft,
  complementRight
} = {}) =>
  Immutable({
    color,
    achromatic,
    analogousLeft,
    analogousRight,
    complement,
    complementLeft,
    complementRight
  });

Object.freeze(AppState);

export default AppState;
