import CssNamedColor from "./CssNamedColor.js";

QUnit.module("CssNamedColor");

QUnit.test("color()", (assert) => {
  // Setup.
  const colorKey = CssNamedColor.RED;

  // Run.
  const result = CssNamedColor.color(colorKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.r, 255);
  assert.equal(result.g, 0);
  assert.equal(result.b, 0);
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = CssNamedColor.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(CssNamedColor);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = CssNamedColor[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(
        CssNamedColor.properties[key2],
        `Missing value for key = ${key}`
      );
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => CssNamedColor[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = CssNamedColor.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 139);
  assert.equal(R.head(result), CssNamedColor.ALICE_BLUE);
  assert.equal(R.last(result), CssNamedColor.YELLOW_GREEN);
});

const CssNamedColorTest = {};
export default CssNamedColorTest;
