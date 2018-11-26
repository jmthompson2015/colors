import Color from "./Color.js";

QUnit.module("Color");

QUnit.test("Color properties Azure", assert => {
  // Setup / Run.
  const color = Color.AZURE;

  // Verify.
  assert.equal(color.name, "Azure");
  assert.equal(color.h, 210);
  assert.equal(color.s, 100);
  assert.equal(color.l, 50);
});

const ColorTest = {};
export default ColorTest;
