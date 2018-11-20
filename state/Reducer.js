/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";
import ColorUtils from "./ColorUtilities.js";

const Reducer = {};

Reducer.root = (state, action) => {
  // LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  let newAchromatic;
  let newAnalogousLeft;
  let newAnalogousRight;
  let newComplementary;

  switch (action.type) {
    case ActionType.SET_COLOR:
      console.log(`Reducer SET_COLOR ${JSON.stringify(action.color)}`);
      newComplementary = ColorUtils.complementary(action.color);
      newAnalogousLeft = ColorUtils.analogousLeft(action.color);
      newAnalogousRight = ColorUtils.analogousRight(action.color);
      newAchromatic = ColorUtils.achromatic(action.color);
      return R.pipe(
        R.assoc("color", action.color),
        R.assoc("complementary", newComplementary),
        R.assoc("analogousLeft", newAnalogousLeft),
        R.assoc("analogousRight", newAnalogousRight),
        R.assoc("achromatic", newAchromatic)
      )(state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
