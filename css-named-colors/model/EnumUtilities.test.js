import EnumUtilities from "./EnumUtilities.js";
import CssNamedColor from "./CssNamedColor.js";

QUnit.module("EnumUtilities");

QUnit.test("keys() CssNamedColor", assert => {
  // Run.
  const result = EnumUtilities.keys(CssNamedColor);

  // Verify.
  const length = 139;
  assert.ok(result);
  assert.equal(result.length, length);
  assert.equal(result[0], CssNamedColor.ALICE_BLUE);
  assert.equal(result[length - 1], CssNamedColor.YELLOW_GREEN);
});

QUnit.test("values() CssNamedColor", assert => {
  // Run.
  const result = EnumUtilities.values(CssNamedColor);

  // Verify.
  const length = 139;
  assert.ok(result);
  assert.equal(result.length, length);
  assert.equal(result[0], CssNamedColor.properties[CssNamedColor.ALICE_BLUE]);
  assert.equal(result[length - 1], CssNamedColor.properties[CssNamedColor.YELLOW_GREEN]);
});

const EnumUtilitiesTest = {};
export default EnumUtilitiesTest;
