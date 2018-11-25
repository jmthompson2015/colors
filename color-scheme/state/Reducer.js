/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";
import CU from "./ColorUtilities.js";

const Reducer = {};

Reducer.root = (state, action) => {
  // LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  let newAchromatic;
  let newAnalogousLeft;
  let newAnalogousRight;
  let newComplement;
  let newComplementLeft;
  let newComplementRight;

  switch (action.type) {
    case ActionType.SET_COLOR:
      console.log(`Reducer SET_COLOR ${JSON.stringify(action.color)}`);
      newAchromatic = CU.achromatic(action.color);
      newAnalogousLeft = CU.analogousLeft(action.color);
      newAnalogousRight = CU.analogousRight(action.color);
      newComplement = CU.complementary(action.color);
      newComplementLeft = CU.analogousLeft(newComplement);
      newComplementRight = CU.analogousRight(newComplement);
      return R.pipe(
        R.assoc("color", action.color),
        R.assoc("achromatic", newAchromatic),
        R.assoc("analogousLeft", newAnalogousLeft),
        R.assoc("analogousRight", newAnalogousRight),
        R.assoc("complement", newComplement),
        R.assoc("complementLeft", newComplementLeft),
        R.assoc("complementRight", newComplementRight)
      )(state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
