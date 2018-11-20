import Color from "./Color.js";
import CU from "./ColorUtilities.js";

QUnit.module("ColorUtilities");

const verifyColor = assert => (result, expected, comment = "") => {
  assert.equal(result.r, expected.r, `${comment} r`);
  assert.equal(result.g, expected.g, `${comment} g`);
  assert.equal(result.b, expected.b, `${comment} b`);
};

const verifyHsl = assert => (result, expected, comment = "") => {
  assert.equal(result.h, expected.h, `${comment} h`);
  assert.equal(result.s, expected.s, `${comment} s`);
  assert.equal(result.l, expected.l, `${comment} l`);
};

QUnit.test("achromatic()", assert => {
  const myVerify = verifyColor(assert);
  const expected0 = { r: 0, g: 0, b: 0 };
  const expected127 = { r: 127, g: 127, b: 127 };
  const expected255 = { r: 255, g: 255, b: 255 };

  myVerify(CU.achromatic(Color.create()), expected0);
  myVerify(CU.achromatic(Color.create({ r: 125, g: 127, b: 126 })), expected127);
  myVerify(CU.achromatic(Color.create({ r: 255 })), expected255);
  myVerify(CU.achromatic(Color.create({ g: 255 })), expected255);
  myVerify(CU.achromatic(Color.create({ b: 255 })), expected255);
  myVerify(CU.achromatic(Color.create({ r: 255, g: 255, b: 255 })), expected255);
});

QUnit.test("analogousLeft()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.analogousLeft(Color.create({ r: 255 })), { r: 255, g: 0, b: 128 }, "red");
  myVerify(CU.analogousLeft(Color.create({ g: 255 })), { r: 128, g: 255, b: 0 }, "green");
  myVerify(CU.analogousLeft(Color.create({ b: 255 })), { r: 0, g: 128, b: 255 }, "blue");

  myVerify(CU.analogousLeft(Color.create({ r: 255, g: 255 })), { r: 255, g: 128, b: 0 }, "yellow");
  myVerify(CU.analogousLeft(Color.create({ g: 255, b: 255 })), { r: 0, g: 255, b: 128 }, "cyan");
  myVerify(CU.analogousLeft(Color.create({ r: 255, b: 255 })), { r: 127, g: 0, b: 255 }, "magenta");

  myVerify(CU.analogousLeft(Color.create({ r: 128 })), { r: 128, g: 0, b: 64 }, "medium red");
});

QUnit.test("analogousRight()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.analogousRight(Color.create({ r: 255 })), { r: 255, g: 128, b: 0 }, "red");
  myVerify(CU.analogousRight(Color.create({ g: 255 })), { r: 0, g: 255, b: 127 }, "green");
  myVerify(CU.analogousRight(Color.create({ b: 255 })), { r: 127, g: 0, b: 255 }, "blue");

  myVerify(CU.analogousRight(Color.create({ r: 255, g: 255 })), { r: 128, g: 255, b: 0 }, "yellow");
  myVerify(CU.analogousRight(Color.create({ g: 255, b: 255 })), { r: 0, g: 127, b: 255 }, "cyan");
  myVerify(
    CU.analogousRight(Color.create({ r: 255, b: 255 })),
    { r: 255, g: 0, b: 127 },
    "magenta"
  );

  myVerify(CU.analogousRight(Color.create({ r: 128 })), { r: 128, g: 64, b: 0 }, "medium red");
});

QUnit.test("complementary() red", assert => {
  // Setup.
  const color = Color.create({ r: 255 });

  // Run.
  const result = CU.complementary(color);

  // Verify.
  assert.ok(result);
  verifyColor(assert)(result, { r: 0, g: 255, b: 255 });
});

QUnit.test("hslToRgb()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.hslToRgb(0, 0, 0), { r: 0, g: 0, b: 0 }, "black");
  myVerify(CU.hslToRgb(0, 0, 1), { r: 255, g: 255, b: 255 }, "white");

  myVerify(CU.hslToRgb(0, 1, 0.5), { r: 255, g: 0, b: 0 }, "red");
  myVerify(CU.hslToRgb(1 / 3, 1, 0.5), { r: 0, g: 255, b: 0 }, "green");
  myVerify(CU.hslToRgb(2 / 3, 1, 0.5), { r: 0, g: 0, b: 255 }, "blue");

  myVerify(CU.hslToRgb(1 / 6, 1, 0.5), { r: 255, g: 255, b: 0 }, "yellow");
  myVerify(CU.hslToRgb(3 / 6, 1, 0.5), { r: 0, g: 255, b: 255 }, "cyan");
  myVerify(CU.hslToRgb(5 / 6, 1, 0.5), { r: 255, g: 0, b: 255 }, "magenta");
});

QUnit.test("rgbToHsl()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.rgbToHsl(0, 0, 0), { h: 0, s: 0, l: 0 }, "black");
  myVerify(CU.rgbToHsl(255, 255, 255), { h: 0, s: 0, l: 1 }, "white");

  myVerify(CU.rgbToHsl(255, 0, 0), { h: 0, s: 1, l: 0.5 }, "red");
  myVerify(CU.rgbToHsl(0, 255, 0), { h: 1 / 3, s: 1, l: 0.5 }, "green");
  myVerify(CU.rgbToHsl(0, 0, 255), { h: 2 / 3, s: 1, l: 0.5 }, "blue");

  myVerify(CU.rgbToHsl(255, 255, 0), { h: 1 / 6, s: 1, l: 0.5 }, "yellow");
  myVerify(CU.rgbToHsl(0, 255, 255), { h: 3 / 6, s: 1, l: 0.5 }, "cyan");
  myVerify(CU.rgbToHsl(255, 0, 255), { h: 5 / 6, s: 1, l: 0.5 }, "magenta");
});

QUnit.test("toString() red", assert => {
  // Setup.
  const color = Color.create({ r: 1, g: 2, b: 3, a: 0.5 });

  // Run.
  const result = CU.toString(color);

  // Verify.
  assert.ok(result);
  assert.equal(result, "1, 2, 3, 0.5");
});

QUnit.test("toStyle() red", assert => {
  // Setup.
  const color = Color.create({ r: 1, g: 2, b: 3, a: 0.5 });

  // Run.
  const result = CU.toStyle(color);

  // Verify.
  assert.ok(result);
  assert.equal(result, "rgba(1, 2, 3, 0.5)");
});

const ColorUtilitiesTest = {};
export default ColorUtilitiesTest;
