import Color from "./Color.js";
import CssNamedColor from "./CssNamedColor.js";
import WheelSector from "./WheelSector.js";

QUnit.module("WheelSector");

QUnit.test("sector() Red", (assert) => {
  // Setup.
  const color = CssNamedColor.color(CssNamedColor.RED);

  // Run.
  const result = WheelSector.sector(color);

  // Verify.
  assert.ok(result);
  assert.equal(result.name, "Red");
  assert.equal(result.angle, 0);
  assert.equal(result.key, WheelSector.RED);
});

QUnit.test("sector() Green", (assert) => {
  // Setup.
  const color = CssNamedColor.color(CssNamedColor.GREEN);

  // Run.
  const result = WheelSector.sector(color);

  // Verify.
  assert.ok(result);
  assert.equal(result.name, "Green");
  assert.equal(result.angle, 120);
  assert.equal(result.key, WheelSector.GREEN);
});

QUnit.test("sectorKey() Color", (assert) => {
  // Setup.
  const sectorKey = (color) => WheelSector.sectorKey(color);

  // Run / Verify.
  assert.equal(sectorKey(Color.RED), WheelSector.RED);
  assert.equal(sectorKey(Color.ORANGE), WheelSector.ORANGE);
  assert.equal(sectorKey(Color.YELLOW), WheelSector.YELLOW);
  assert.equal(sectorKey(Color.CHARTREUSE_GREEN), WheelSector.CHARTREUSE);
  assert.equal(sectorKey(Color.GREEN), WheelSector.GREEN);
  assert.equal(sectorKey(Color.SPRING_GREEN), WheelSector.SPRING_GREEN);
  assert.equal(sectorKey(Color.CYAN), WheelSector.CYAN);
  assert.equal(sectorKey(Color.AZURE), WheelSector.AZURE);
  assert.equal(sectorKey(Color.BLUE), WheelSector.BLUE);
  assert.equal(sectorKey(Color.VIOLET), WheelSector.VIOLET);
  assert.equal(sectorKey(Color.MAGENTA), WheelSector.MAGENTA);
  assert.equal(sectorKey(Color.ROSE), WheelSector.ROSE);
  assert.equal(sectorKey(Color.GRAY), WheelSector.GRAY);
});

QUnit.test("sectorKey() CssNamedColor", (assert) => {
  // Setup.
  const sectorKey = (colorKey) =>
    WheelSector.sectorKey(CssNamedColor.color(colorKey));

  // Run / Verify.
  assert.equal(sectorKey(CssNamedColor.RED), WheelSector.RED);
  assert.equal(sectorKey(CssNamedColor.ORANGE), WheelSector.ORANGE);
  assert.equal(sectorKey(CssNamedColor.YELLOW), WheelSector.YELLOW);
  assert.equal(sectorKey(CssNamedColor.CHARTREUSE), WheelSector.CHARTREUSE);
  assert.equal(sectorKey(CssNamedColor.GREEN), WheelSector.GREEN);
  assert.equal(sectorKey(CssNamedColor.SPRING_GREEN), WheelSector.SPRING_GREEN);
  assert.equal(sectorKey(CssNamedColor.CYAN), WheelSector.CYAN);
  assert.equal(sectorKey(CssNamedColor.DODGER_BLUE), WheelSector.AZURE);
  assert.equal(sectorKey(CssNamedColor.BLUE), WheelSector.BLUE);
  assert.equal(sectorKey(CssNamedColor.REBECCA_PURPLE), WheelSector.VIOLET);
  assert.equal(sectorKey(CssNamedColor.MAGENTA), WheelSector.MAGENTA);
  assert.equal(sectorKey(CssNamedColor.HOT_PINK), WheelSector.ROSE);
  assert.equal(sectorKey(CssNamedColor.GRAY), WheelSector.GRAY);
});

QUnit.test("keys and values", (assert) => {
  // Run.
  const result = WheelSector.keys();
  const ownPropertyNames = Object.getOwnPropertyNames(WheelSector);

  // Verify.
  ownPropertyNames.forEach((key) => {
    const key2 = WheelSector[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(WheelSector.properties[key2], `Missing value for key = ${key}`);
    }
  });

  result.forEach((value) => {
    const p = ownPropertyNames.filter((key) => WheelSector[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  });
});

QUnit.test("keys()", (assert) => {
  // Run.
  const result = WheelSector.keys();

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 13);
  assert.equal(R.head(result), WheelSector.RED);
  assert.equal(R.last(result), WheelSector.GRAY);
});

const WheelSectorTest = {};
export default WheelSectorTest;
