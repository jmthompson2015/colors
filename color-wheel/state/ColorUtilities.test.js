import Color from "./Color.js";
import CU from "./ColorUtilities.js";

QUnit.module("ColorUtilities");

QUnit.test("toString()", assert => {
  // Setup.
  const color = Color.create({ h: 1, s: 2, l: 3 });

  // Run.
  const result = CU.toString(color);

  // Verify.
  assert.ok(result);
  assert.equal(result, "1, 2%, 3%");
});

QUnit.test("toStyle()", assert => {
  // Setup.
  const color = Color.create({ h: 1, s: 2, l: 3 });

  // Run.
  const result = CU.toStyle(color);

  // Verify.
  assert.ok(result);
  assert.equal(result, "hsl(1, 2%, 3%)");
});

const ColorUtilitiesTest = {};
export default ColorUtilitiesTest;
