import RGBAxis from "./RGBAxis.js";

QUnit.module("RGBAxis");

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = RGBAxis.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(RGBAxis);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = RGBAxis[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(RGBAxis.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => RGBAxis[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = RGBAxis.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 13);
  assert.equal(R.head(result), RGBAxis.RED);
  assert.equal(R.last(result), RGBAxis.GRAY);
});

const RGBAxisTest = {};
export default RGBAxisTest;
