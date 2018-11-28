import Color from "./Color.js";
import CU from "./ColorUtilities.js";

QUnit.module("ColorUtilities");

const round2 = value => Math.round(value * 100.0) / 100.0;

const verifyHsl = assert => (result, expected, comment = "") => {
  assert.equal(round2(result.h), round2(expected.h), `${comment} h`);
  assert.equal(round2(result.s), round2(expected.s), `${comment} s`);
  assert.equal(round2(result.l), round2(expected.l), `${comment} l`);
};

const verifyRgb = assert => (result, expected, comment = "") => {
  assert.equal(round2(result.r), round2(expected.r), `${comment} r`);
  assert.equal(round2(result.g), round2(expected.g), `${comment} g`);
  assert.equal(round2(result.b), round2(expected.b), `${comment} b`);
};

QUnit.test("achromatic()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.achromatic(Color.BLACK), Color.BLACK, "black");
  myVerify(CU.achromatic(Color.create({ h: 120, s: 50, l: 50 })), { h: 120, s: 0, l: 50 }, "gray");
  myVerify(CU.achromatic(Color.RED), { h: 0, s: 0, l: 50 }, "red");
  myVerify(CU.achromatic(Color.GREEN), { h: 120, s: 0, l: 50 }, "green");
  myVerify(CU.achromatic(Color.BLUE), { h: 240, s: 0, l: 50 }, "blue");
  myVerify(CU.achromatic(Color.WHITE), Color.WHITE, "white");
});

QUnit.test("analogousLeft()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.analogousLeft(Color.RED), { h: 330, s: 100, l: 50 }, "red");
  myVerify(CU.analogousLeft(Color.GREEN), { h: 90, s: 100, l: 50 }, "green");
  myVerify(CU.analogousLeft(Color.BLUE), { h: 210, s: 100, l: 50 }, "blue");

  myVerify(CU.analogousLeft(Color.YELLOW), { h: 30, s: 100, l: 50 }, "yellow");
  myVerify(CU.analogousLeft(Color.CYAN), { h: 150, s: 100, l: 50 }, "cyan");
  myVerify(CU.analogousLeft(Color.MAGENTA), { h: 270, s: 100, l: 50 }, "magenta");

  myVerify(CU.analogousLeft(Color.create({ s: 50 })), { h: 330, s: 50, l: 50 }, "medium red");
});

QUnit.test("analogousRight()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.analogousRight(Color.RED), { h: 30, s: 100, l: 50 }, "red");
  myVerify(CU.analogousRight(Color.GREEN), { h: 150, s: 100, l: 50 }, "green");
  myVerify(CU.analogousRight(Color.BLUE), { h: 270, s: 100, l: 50 }, "blue");

  myVerify(CU.analogousRight(Color.YELLOW), { h: 90, s: 100, l: 50 }, "yellow");
  myVerify(CU.analogousRight(Color.CYAN), { h: 210, s: 100, l: 50 }, "cyan");
  myVerify(CU.analogousRight(Color.MAGENTA), { h: 330, s: 100, l: 50 }, "magenta");

  myVerify(CU.analogousRight(Color.create({ s: 50 })), { h: 30, s: 50, l: 50 }, "medium red");
});

QUnit.test("complementary() red", assert => {
  // Setup.
  const color = Color.RED;

  // Run.
  const result = CU.complementary(color);

  // Verify.
  assert.ok(result);
  verifyHsl(assert)(result, { h: 180, s: 100, l: 50 });
});

QUnit.test("hslToRgb()", assert => {
  const myVerify = verifyRgb(assert);
  myVerify(CU.hslToRgb(0, 0, 0), { r: 0, g: 0, b: 0 }, "black");
  myVerify(CU.hslToRgb(0, 0, 100), { r: 255, g: 255, b: 255 }, "white");

  myVerify(CU.hslToRgb(0, 100, 50), { r: 255, g: 0, b: 0 }, "red");
  myVerify(CU.hslToRgb(120, 100, 50), { r: 0, g: 255, b: 0 }, "green");
  myVerify(CU.hslToRgb(240, 100, 50), { r: 0, g: 0, b: 255 }, "blue");

  myVerify(CU.hslToRgb(0, 100, 25), { r: 127.5, g: 0, b: 0 }, "maroon");
  myVerify(CU.hslToRgb(120, 100, 25), { r: 0, g: 127.5, b: 0 }, "dark green");
  myVerify(CU.hslToRgb(240, 100, 25), { r: 0, g: 0, b: 127.5 }, "navy");
});

QUnit.test("HSL round trip", assert => {
  const myVerify = verifyHsl(assert);
  let rgb = CU.hslToRgb(0, 0, 0);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 0, s: 0, l: 0 }, "black");
  rgb = CU.hslToRgb(0, 0, 100);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 0, s: 0, l: 100 }, "white");

  rgb = CU.hslToRgb(0, 100, 50);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 0, s: 100, l: 50 }, "red");
  rgb = CU.hslToRgb(120, 100, 50);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 120, s: 100, l: 50 }, "green");
  rgb = CU.hslToRgb(240, 100, 50);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 240, s: 100, l: 50 }, "blue");

  rgb = CU.hslToRgb(0, 100, 25);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 0, s: 100, l: 25 }, "maroon");
  rgb = CU.hslToRgb(120, 100, 25);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 120, s: 100, l: 25 }, "dark green");
  rgb = CU.hslToRgb(240, 100, 25);
  myVerify(CU.rgbToHsl(rgb.r, rgb.g, rgb.b), { h: 240, s: 100, l: 25 }, "navy");
});

QUnit.test("rgbToHsl()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.rgbToHsl(0, 0, 0), { h: 0, s: 0, l: 0 }, "black");
  myVerify(CU.rgbToHsl(255, 255, 255), { h: 0, s: 0, l: 100 }, "white");

  myVerify(CU.rgbToHsl(255, 0, 0), { h: 0, s: 100, l: 50 }, "red");
  myVerify(CU.rgbToHsl(0, 255, 0), { h: 120, s: 100, l: 50 }, "green");
  myVerify(CU.rgbToHsl(0, 0, 255), { h: 240, s: 100, l: 50 }, "blue");

  myVerify(CU.rgbToHsl(127, 0, 0), { h: 0, s: 100, l: 24.9 }, "maroon");
  myVerify(CU.rgbToHsl(0, 127, 0), { h: 120, s: 100, l: 24.9 }, "dark green");
  myVerify(CU.rgbToHsl(0, 0, 127), { h: 240, s: 100, l: 24.9 }, "navy");
});

QUnit.test("RGB round trip", assert => {
  const myVerify = verifyRgb(assert);
  let hsl = CU.rgbToHsl(0, 0, 0);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 0, g: 0, b: 0 }, "black");
  hsl = CU.rgbToHsl(255, 255, 255);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 255, g: 255, b: 255 }, "white");

  hsl = CU.rgbToHsl(255, 0, 0);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 255, g: 0, b: 0 }, "red");
  hsl = CU.rgbToHsl(0, 255, 0);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 0, g: 255, b: 0 }, "green");
  hsl = CU.rgbToHsl(0, 0, 255);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 0, g: 0, b: 255 }, "blue");

  hsl = CU.rgbToHsl(127, 0, 0);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 127, g: 0, b: 0 }, "maroon");
  hsl = CU.rgbToHsl(0, 127, 0);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 0, g: 127, b: 0 }, "dark green");
  hsl = CU.rgbToHsl(0, 0, 127);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 0, g: 0, b: 127 }, "navy");

  hsl = CU.rgbToHsl(220, 220, 220);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 220, g: 220, b: 220 }, "Gainsboro");
  hsl = CU.rgbToHsl(229, 228, 226);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 229, g: 228, b: 226 }, "Platinum");
  hsl = CU.rgbToHsl(102, 153, 204);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 102, g: 153, b: 204 }, "Blue-Gray");
  hsl = CU.rgbToHsl(204, 136, 153);
  myVerify(CU.hslToRgb(hsl.h, hsl.s, hsl.l), { r: 204, g: 136, b: 153 }, "Puce");
});

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

QUnit.test("triadicLeft()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.triadicLeft(Color.RED), Color.BLUE, "red");
  myVerify(CU.triadicLeft(Color.GREEN), Color.RED, "green");
  myVerify(CU.triadicLeft(Color.BLUE), Color.GREEN, "blue");

  myVerify(CU.triadicLeft(Color.YELLOW), Color.MAGENTA, "yellow");
  myVerify(CU.triadicLeft(Color.CYAN), Color.YELLOW, "cyan");
  myVerify(CU.triadicLeft(Color.MAGENTA), Color.CYAN, "magenta");

  myVerify(CU.triadicLeft(Color.create({ s: 50 })), { h: 240, s: 50, l: 50 }, "medium red");
});

QUnit.test("triadicRight()", assert => {
  const myVerify = verifyHsl(assert);
  myVerify(CU.triadicRight(Color.RED), Color.GREEN, "red");
  myVerify(CU.triadicRight(Color.GREEN), Color.BLUE, "green");
  myVerify(CU.triadicRight(Color.BLUE), Color.RED, "blue");

  myVerify(CU.triadicRight(Color.YELLOW), Color.CYAN, "yellow");
  myVerify(CU.triadicRight(Color.CYAN), Color.MAGENTA, "cyan");
  myVerify(CU.triadicRight(Color.MAGENTA), Color.YELLOW, "magenta");

  myVerify(CU.triadicRight(Color.create({ s: 50 })), { h: 120, s: 50, l: 50 }, "medium red");
});

const ColorUtilitiesTest = {};
export default ColorUtilitiesTest;
