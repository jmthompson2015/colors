import AppState from "./AppState.js";
import ActionCreator from "./ActionCreator.js";
import Color from "./Color.js";
import Reducer from "./Reducer.js";

QUnit.module("Reducer");

const verifyColor = (assert, result, expected, comment = "") => {
  assert.equal(result.r, expected.r, `${comment} r`);
  assert.equal(result.g, expected.g, `${comment} g`);
  assert.equal(result.b, expected.b, `${comment} b`);
};

QUnit.test("setColor()", assert => {
  // Setup.
  const state = AppState.create();
  const color = Color.create({ r: 255, g: 255 });
  const action = ActionCreator.setColor(color);

  // Run.
  const result = Reducer.root(state, action);

  // Verify.
  assert.ok(result);
  verifyColor(assert, result.color, color);
  verifyColor(assert, result.complementary, { r: 0, g: 0, b: 255 }, "complementary");
  verifyColor(assert, result.analogousLeft, { r: 255, g: 128, b: 0 }, "analogousLeft");
  verifyColor(assert, result.analogousRight, { r: 128, g: 255, b: 0 }, "analogousRight");
  verifyColor(assert, result.achromatic, { r: 255, g: 255, b: 255 }, "achromatic");
});

const ReducerTest = {};
export default ReducerTest;
