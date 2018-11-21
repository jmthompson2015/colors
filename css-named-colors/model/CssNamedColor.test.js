import EnumTest from "./Enum.test.js";
import CssNamedColor from "./CssNamedColor.js";

QUnit.module("CssNamedColor");

QUnit.test("keys and values", assert => {
  EnumTest.keysAndValues(assert, CssNamedColor);
});

QUnit.test("keys()", assert => {
  EnumTest.keys(assert, CssNamedColor, 139, CssNamedColor.ALICE_BLUE, CssNamedColor.YELLOW_GREEN);
});

const CssNamedColorTest = {};
export default CssNamedColorTest;
