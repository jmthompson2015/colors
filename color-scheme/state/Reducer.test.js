import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Color from "./Color.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

const verifyColor = assert => (result, expected, comment = "") => {
  assert.equal(result.h, expected.h, `${comment} h`);
  assert.equal(result.s, expected.s, `${comment} s`);
  assert.equal(result.l, expected.l, `${comment} l`);
};

QUnit.test("setColor()", assert => {
  // Setup.
  const state = AppState.create();
  const color = Color.YELLOW;
  const action = ActionCreator.setColor(color);
  const myVerify = verifyColor(assert);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  myVerify(result.color, color);
  myVerify(result.complementary, Color.BLUE, "complementary");
  myVerify(result.analogousLeft, Color.ORANGE, "analogousLeft");
  myVerify(result.analogousRight, Color.CHARTREUSE_GREEN, "analogousRight");
  myVerify(result.achromatic, { h: 60, s: 0, l: 50 }, "achromatic");
});

const ReducerTest = {};
export default ReducerTest;
