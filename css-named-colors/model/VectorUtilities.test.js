import Vector from "./Vector.js";
import VU from "./VectorUtilities.js";

QUnit.module("VectorUtilities");

const round2 = value => Math.round(value * 100.0) / 100.0;

const verifyVector = assert => (result, expected, comment = "") => {
  assert.equal(result.x, expected.x, `${comment} x`);
  assert.equal(result.y, expected.y, `${comment} y`);
  assert.equal(result.z, expected.z, `${comment} z`);
};

QUnit.test("add()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });
  const v2 = Vector.create({ x: 4, y: 5, z: 6 });

  // Run.
  const result = VU.add(v1, v2);

  // Verify.
  assert.ok(result);
  verifyVector(assert)(result, { x: 5, y: 7, z: 9 });
});

QUnit.test("cross()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });
  const v2 = Vector.create({ x: 4, y: 5, z: 6 });

  // Run.
  const result = VU.cross(v1, v2);

  // Verify.
  assert.ok(result);
  verifyVector(assert)(result, { x: -3, y: 6, z: -3 });
});

QUnit.test("dot()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });
  const v2 = Vector.create({ x: 4, y: 5, z: 6 });

  // Run.
  const result = VU.dot(v1, v2);

  // Verify.
  assert.ok(result);
  assert.equal(result, 32);
});

QUnit.test("magnitude()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });

  // Run.
  const result = VU.magnitude(v1);

  // Verify.
  assert.ok(result);
  assert.equal(round2(result), 3.74);
});

QUnit.test("magnitudeSquared()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });

  // Run.
  const result = VU.magnitudeSquared(v1);

  // Verify.
  assert.ok(result);
  assert.equal(result, 14);
});

QUnit.test("multiply()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });
  const scalar = 2.0;

  // Run.
  const result = VU.multiply(v1, scalar);

  // Verify.
  assert.ok(result);
  verifyVector(assert)(result, { x: 2, y: 4, z: 6 });
});

QUnit.test("subtract()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });
  const v2 = Vector.create({ x: 4, y: 5, z: 6 });

  // Run.
  const result = VU.subtract(v2, v1);

  // Verify.
  assert.ok(result);
  verifyVector(assert)(result, { x: 3, y: 3, z: 3 });
});

QUnit.test("unit()", assert => {
  // Setup.
  const v1 = Vector.create({ x: 1, y: 2, z: 3 });

  // Run.
  const result = VU.unit(v1);

  // Verify.
  assert.ok(result);
  assert.equal(round2(result.x), 0.27);
  assert.equal(round2(result.y), 0.53);
  assert.equal(round2(result.z), 0.8);
});

const VectorUtilitiesTest = {};
export default VectorUtilitiesTest;
