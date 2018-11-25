import Color from "./Color.js";
import CU from "./ColorUtilities.js";

QUnit.module("ColorUtilities");

const verifyColor = assert => (result, expected, comment = "") => {
  assert.equal(result.h, expected.h, `${comment} h`);
  assert.equal(result.s, expected.s, `${comment} s`);
  assert.equal(result.l, expected.l, `${comment} l`);
};

QUnit.test("achromatic()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.achromatic(Color.BLACK), Color.BLACK, "black");
  myVerify(CU.achromatic(Color.create({ h: 120, s: 50, l: 50 })), { h: 120, s: 0, l: 50 }, "gray");
  myVerify(CU.achromatic(Color.RED), { h: 0, s: 0, l: 50 }, "red");
  myVerify(CU.achromatic(Color.GREEN), { h: 120, s: 0, l: 50 }, "green");
  myVerify(CU.achromatic(Color.BLUE), { h: 240, s: 0, l: 50 }, "blue");
  myVerify(CU.achromatic(Color.WHITE), Color.WHITE, "white");
});

QUnit.test("analogousLeft()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.analogousLeft(Color.RED), { h: 330, s: 100, l: 50 }, "red");
  myVerify(CU.analogousLeft(Color.GREEN), { h: 90, s: 100, l: 50 }, "green");
  myVerify(CU.analogousLeft(Color.BLUE), { h: 210, s: 100, l: 50 }, "blue");

  myVerify(CU.analogousLeft(Color.YELLOW), { h: 30, s: 100, l: 50 }, "yellow");
  myVerify(CU.analogousLeft(Color.CYAN), { h: 150, s: 100, l: 50 }, "cyan");
  myVerify(CU.analogousLeft(Color.MAGENTA), { h: 270, s: 100, l: 50 }, "magenta");

  myVerify(CU.analogousLeft(Color.create({ s: 50 })), { h: 330, s: 50, l: 50 }, "medium red");
});

QUnit.test("analogousRight()", assert => {
  const myVerify = verifyColor(assert);
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
  verifyColor(assert)(result, { h: 180, s: 100, l: 50 });
});

QUnit.test("createRGB()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.createRGB(), { h: 0, s: 0, l: 0 }, "black");
  myVerify(CU.createRGB({ r: 127, g: 127, b: 127 }), { h: 0, s: 0, l: 50 }, "gray");
  myVerify(CU.createRGB({ r: 255, g: 255, b: 255 }), { h: 0, s: 0, l: 100 }, "white");

  myVerify(CU.createRGB({ r: 255 }), { h: 0, s: 100, l: 50 }, "red");
  myVerify(CU.createRGB({ g: 255 }), { h: 120, s: 100, l: 50 }, "green");
  myVerify(CU.createRGB({ b: 255 }), { h: 240, s: 100, l: 50 }, "blue");

  myVerify(CU.createRGB({ r: 255, g: 255 }), { h: 60, s: 100, l: 50 }, "yellow");
  myVerify(CU.createRGB({ g: 255, b: 255 }), { h: 180, s: 100, l: 50 }, "cyan");
  myVerify(CU.createRGB({ r: 255, b: 255 }), { h: 300, s: 100, l: 50 }, "magenta");
});

QUnit.test("rgbToHsl()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.rgbToHsl(0, 0, 0), { h: 0, s: 0, l: 0 }, "black");
  myVerify(CU.rgbToHsl(127, 127, 127), { h: 0, s: 0, l: 50 }, "gray");
  myVerify(CU.rgbToHsl(255, 255, 255), { h: 0, s: 0, l: 100 }, "white");

  myVerify(CU.rgbToHsl(255, 0, 0), { h: 0, s: 100, l: 50 }, "red");
  myVerify(CU.rgbToHsl(0, 255, 0), { h: 120, s: 100, l: 50 }, "green");
  myVerify(CU.rgbToHsl(0, 0, 255), { h: 240, s: 100, l: 50 }, "blue");

  myVerify(CU.rgbToHsl(255, 255, 0), { h: 60, s: 100, l: 50 }, "yellow");
  myVerify(CU.rgbToHsl(0, 255, 255), { h: 180, s: 100, l: 50 }, "cyan");
  myVerify(CU.rgbToHsl(255, 0, 255), { h: 300, s: 100, l: 50 }, "magenta");
});

QUnit.test("toString()", assert => {
  // Setup.
  const color = Color.create({ h: 1, s: 2, l: 3, a: 0.5 });

  // Run.
  const result = CU.toString(color);

  // Verify.
  assert.ok(result);
  assert.equal(result, "1, 2%, 3%, 0.5");
});

QUnit.test("toStyle()", assert => {
  // Setup.
  const color = Color.create({ h: 1, s: 2, l: 3, a: 0.5 });

  // Run.
  const result = CU.toStyle(color);

  // Verify.
  assert.ok(result);
  assert.equal(result, "hsla(1, 2%, 3%, 0.5)");
});

QUnit.test("triadicLeft()", assert => {
  const myVerify = verifyColor(assert);
  myVerify(CU.triadicLeft(Color.RED), Color.BLUE, "red");
  myVerify(CU.triadicLeft(Color.GREEN), Color.RED, "green");
  myVerify(CU.triadicLeft(Color.BLUE), Color.GREEN, "blue");

  myVerify(CU.triadicLeft(Color.YELLOW), Color.MAGENTA, "yellow");
  myVerify(CU.triadicLeft(Color.CYAN), Color.YELLOW, "cyan");
  myVerify(CU.triadicLeft(Color.MAGENTA), Color.CYAN, "magenta");

  myVerify(CU.triadicLeft(Color.create({ s: 50 })), { h: 240, s: 50, l: 50 }, "medium red");
});

QUnit.test("triadicRight()", assert => {
  const myVerify = verifyColor(assert);
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
