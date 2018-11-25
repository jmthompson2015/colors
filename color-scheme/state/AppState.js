const AppState = {};

AppState.create = ({
  color,
  achromatic,
  analogousLeft,
  analogousRight,
  complement,
  complementLeft,
  complementRight,
  triadicLeft,
  triadicRight
} = {}) =>
  Immutable({
    color,
    achromatic,
    analogousLeft,
    analogousRight,
    complement,
    complementLeft,
    complementRight,
    triadicLeft,
    triadicRight
  });

Object.freeze(AppState);

export default AppState;
