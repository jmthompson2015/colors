import Color from "./Color.js";

QUnit.module("Color");

const round2 = value => Math.round(value * 100.0) / 100.0;

const verifyHsl = assert => (result, expected, comment = "") => {
  assert.equal(result.name, expected.name, `${comment} name`);
  assert.equal(round2(result.h), round2(expected.h), `${comment} h`);
  assert.equal(round2(result.s), round2(expected.s), `${comment} s`);
  assert.equal(round2(result.l), round2(expected.l), `${comment} l`);
};

QUnit.test("Color properties", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(Color.RED, { name: "Red", h: 0, s: 100, l: 50 });
  myVerify(Color.GREEN, { name: "Green", h: 120, s: 100, l: 50 });
  myVerify(Color.BLUE, { name: "Blue", h: 240, s: 100, l: 50 });

  myVerify(Color.GAINSBORO, { name: "Gainsboro", h: 0, s: 0, l: 86.27 });
});

const ColorTest = {};
export default ColorTest;
