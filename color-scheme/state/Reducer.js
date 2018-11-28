/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Color from "../../model/Color.js";
import CU from "../../model/ColorUtilities.js";

import ActionType from "./ActionType.js";
import AppState from "./AppState.js";

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
  let newTriadicLeft;
  let newTriadicRight;

  switch (action.type) {
    case ActionType.SET_COLOR:
      console.log(`Reducer SET_COLOR ${JSON.stringify(action.color)}`);
      newAchromatic = Color.create(CU.achromatic(action.color));
      newAnalogousLeft = Color.create(CU.analogousLeft(action.color));
      newAnalogousRight = Color.create(CU.analogousRight(action.color));
      newComplement = Color.create(CU.complementary(action.color));
      newComplementLeft = Color.create(CU.analogousLeft(newComplement));
      newComplementRight = Color.create(CU.analogousRight(newComplement));
      newTriadicLeft = Color.create(CU.triadicLeft(action.color));
      newTriadicRight = Color.create(CU.triadicRight(action.color));
      return R.pipe(
        R.assoc("color", action.color),
        R.assoc("achromatic", newAchromatic),
        R.assoc("analogousLeft", newAnalogousLeft),
        R.assoc("analogousRight", newAnalogousRight),
        R.assoc("complement", newComplement),
        R.assoc("complementLeft", newComplementLeft),
        R.assoc("complementRight", newComplementRight),
        R.assoc("triadicLeft", newTriadicLeft),
        R.assoc("triadicRight", newTriadicRight)
      )(state);
    default:
      console.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

Object.freeze(Reducer);

export default Reducer;
