import Color from "./Color.js";

QUnit.module("Color");

const round2 = value => Math.round(value * 100.0) / 100.0;

QUnit.test("Color properties Gainsboro", assert => {
  // Setup / Run.
  const color = Color.GAINSBORO;

  // Verify.
  assert.equal(color.name, "Gainsboro");
  assert.equal(color.h, 0);
  assert.equal(color.s, 0);
  assert.equal(round2(color.l), 86.27);
});

const ColorTest = {};
export default ColorTest;
