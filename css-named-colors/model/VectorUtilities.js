import Vector from "./Vector.js";

const VectorUtilities = {};

VectorUtilities.normalizeAngle = angle => {
  let answer = angle;

  while (answer < 0.0) {
    answer += 360.0;
  }

  answer %= 360.0;

  return answer;
};

VectorUtilities.add = (vector, another) => {
  const newX = vector.x + another.x;
  const newY = vector.y + another.y;
  const newZ = vector.z + another.z;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

/*
 * @return the angle between this vector and the given vector, in degrees. The returned angle is
 * always positive.
 */
VectorUtilities.angle = (vector, another) => {
  // Find the angle between two Vectors
  let answer = 90.0;

  const dot = VectorUtilities.dot(vector, another);

  if (dot !== 0.0) {
    const mags = VectorUtilities.magnitude(vector) * VectorUtilities.magnitude(another);

    if (mags === 0.0) {
      answer = 0.0;
    } else {
      // C is the rotation vector. Then the angle would be positive about this vector.
      const c = VectorUtilities.cross(vector, another);
      const cosAngle = dot / mags;
      const sinAngle = VectorUtilities.magnitude(c) / mags; // Note this is always positive.
      const angle0 = Math.atan2(sinAngle, cosAngle);
      answer = angle0 >= 0.0 ? angle0 : Math.atan2(-sinAngle, cosAngle);
      answer *= 180.0 / Math.PI;
    }
  }

  return answer;
};

VectorUtilities.azimuth = vector => {
  let answer = 0.0;
  const v0 = VectorUtilities.unit(vector);
  const v1 = VectorUtilities.unit(Vector.create({ x: vector.x, y: vector.y, z: 0.0 }));

  if (VectorUtilities.magnitude(v1) > 0.0) {
    answer = v1.angle(Vector.X_AXIS);

    if (v0.y() < 0.0) {
      answer = 360.0 - answer;
    }

    answer = VectorUtilities.normalizeAngle(answer);
  }

  return answer;
};

VectorUtilities.cross = (vector, another) => {
  const x0 = vector.x;
  const y0 = vector.y;
  const z0 = vector.z;

  const x1 = another.x;
  const y1 = another.y;
  const z1 = another.z;

  const newX = y0 * z1 - z0 * y1;
  const newY = z0 * x1 - x0 * z1;
  const newZ = x0 * y1 - y0 * x1;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

VectorUtilities.dot = (vector, another) => {
  const x0 = vector.x;
  const y0 = vector.y;
  const z0 = vector.z;

  const x1 = another.x;
  const y1 = another.y;
  const z1 = another.z;

  return x0 * x1 + y0 * y1 + z0 * z1;
};

VectorUtilities.elevation = vector => {
  let answer = 0.0;

  if (VectorUtilities.magnitude(vector) > 0.0) {
    const v0 = vector;
    const v1 = Vector.create({ x: vector.x, y: vector.y, z: 0.0 });

    if (VectorUtilities.magnitude(v1) > 0.0) {
      answer = VectorUtilities.angle(v0, v1);
    } else {
      answer = 90.0;
    }

    if (v0.z < 0.0) {
      answer = -answer;
    }

    answer = VectorUtilities.normalizeAngle(answer);
  }

  return answer;
};

VectorUtilities.magnitude = vector => Math.sqrt(VectorUtilities.magnitudeSquared(vector));

VectorUtilities.magnitudeSquared = vector => {
  const { x, y, z } = vector;

  return x * x + y * y + z * z;
};

VectorUtilities.multiply = (vector, scalar) => {
  const newX = scalar * vector.x;
  const newY = scalar * vector.y;
  const newZ = scalar * vector.z;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

VectorUtilities.subtract = (vector, another) => {
  const newX = vector.x - another.x;
  const newY = vector.y - another.y;
  const newZ = vector.z - another.z;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

VectorUtilities.toString = vector => `(${vector.x}, ${vector.y}, ${vector.z})`;

VectorUtilities.unit = vector => {
  let answer;

  const mag = VectorUtilities.magnitude(vector);

  if (mag === 0.0) {
    answer = Vector.X_AXIS;
  } else {
    answer = VectorUtilities.multiply(vector, 1.0 / mag);
  }

  return answer;
};

export default VectorUtilities;
