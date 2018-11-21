import EnumTest from "./Enum.test.js";
import RGBAxis from "./RGBAxis.js";

QUnit.module("RGBAxis");

QUnit.test("keys and values", assert => {
  EnumTest.keysAndValues(assert, RGBAxis);
});

QUnit.test("keys()", assert => {
  EnumTest.keys(assert, RGBAxis, 13, RGBAxis.RED, RGBAxis.GRAY);
});

const RGBAxisTest = {};
export default RGBAxisTest;
