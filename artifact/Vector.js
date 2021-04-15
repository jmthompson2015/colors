const Vector = {};

Vector.create = ({ x = 0.0, y = 0.0, z = 0.0 } = {}) => Immutable({ x, y, z });

Vector.ZERO = Vector.create({ x: 0.0, y: 0.0, z: 0.0 });
Vector.X_AXIS = Vector.create({ x: 1.0, y: 0.0, z: 0.0 });
Vector.Y_AXIS = Vector.create({ x: 0.0, y: 1.0, z: 0.0 });
Vector.Z_AXIS = Vector.create({ x: 0.0, y: 0.0, z: 1.0 });

Vector.normalizeAngle = (angle) => {
  let answer = angle;

  while (answer < 0.0) {
    answer += 360.0;
  }

  answer %= 360.0;

  return answer;
};

Vector.add = (vector, another) => {
  const newX = vector.x + another.x;
  const newY = vector.y + another.y;
  const newZ = vector.z + another.z;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

/*
 * @return the angle between this vector and the given vector, in degrees. The returned angle is
 * always positive.
 */
Vector.angle = (vector, another) => {
  // Find the angle between two Vectors
  let answer = 90.0;

  const dot = Vector.dot(vector, another);

  if (dot !== 0.0) {
    const mags = Vector.magnitude(vector) * Vector.magnitude(another);

    if (mags === 0.0) {
      answer = 0.0;
    } else {
      // C is the rotation vector. Then the angle would be positive about this vector.
      const c = Vector.cross(vector, another);
      const cosAngle = dot / mags;
      const sinAngle = Vector.magnitude(c) / mags; // Note this is always positive.
      const angle0 = Math.atan2(sinAngle, cosAngle);
      answer = angle0 >= 0.0 ? angle0 : Math.atan2(-sinAngle, cosAngle);
      answer *= 180.0 / Math.PI;
    }
  }

  return answer;
};

Vector.azimuth = (vector) => {
  let answer = 0.0;
  const v0 = Vector.unit(vector);
  const v1 = Vector.unit(Vector.create({ x: vector.x, y: vector.y, z: 0.0 }));

  if (Vector.magnitude(v1) > 0.0) {
    answer = v1.angle(Vector.X_AXIS);

    if (v0.y() < 0.0) {
      answer = 360.0 - answer;
    }

    answer = Vector.normalizeAngle(answer);
  }

  return answer;
};

Vector.cross = (vector, another) => {
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

Vector.dot = (vector, another) => {
  const x0 = vector.x;
  const y0 = vector.y;
  const z0 = vector.z;

  const x1 = another.x;
  const y1 = another.y;
  const z1 = another.z;

  return x0 * x1 + y0 * y1 + z0 * z1;
};

Vector.elevation = (vector) => {
  let answer = 0.0;

  if (Vector.magnitude(vector) > 0.0) {
    const v0 = vector;
    const v1 = Vector.create({ x: vector.x, y: vector.y, z: 0.0 });

    if (Vector.magnitude(v1) > 0.0) {
      answer = Vector.angle(v0, v1);
    } else {
      answer = 90.0;
    }

    if (v0.z < 0.0) {
      answer = -answer;
    }

    answer = Vector.normalizeAngle(answer);
  }

  return answer;
};

Vector.magnitude = (vector) => Math.sqrt(Vector.magnitudeSquared(vector));

Vector.magnitudeSquared = (vector) => {
  const { x, y, z } = vector;

  return x * x + y * y + z * z;
};

Vector.multiply = (vector, scalar) => {
  const newX = scalar * vector.x;
  const newY = scalar * vector.y;
  const newZ = scalar * vector.z;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

Vector.subtract = (vector, another) => {
  const newX = vector.x - another.x;
  const newY = vector.y - another.y;
  const newZ = vector.z - another.z;

  return Vector.create({ x: newX, y: newY, z: newZ });
};

Vector.toString = (vector) => `(${vector.x}, ${vector.y}, ${vector.z})`;

Vector.unit = (vector) => {
  let answer;

  const mag = Vector.magnitude(vector);

  if (mag === 0.0) {
    answer = Vector.X_AXIS;
  } else {
    answer = Vector.multiply(vector, 1.0 / mag);
  }

  return answer;
};

export default Vector;
