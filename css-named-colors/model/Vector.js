const Vector = {};

Vector.create = ({ x = 0.0, y = 0.0, z = 0.0 } = {}) => Immutable({ x, y, z });

Vector.ZERO = Vector.create({ x: 0.0, y: 0.0, z: 0.0 });
Vector.X_AXIS = Vector.create({ x: 1.0, y: 0.0, z: 0.0 });
Vector.Y_AXIS = Vector.create({ x: 0.0, y: 1.0, z: 0.0 });
Vector.Z_AXIS = Vector.create({ x: 0.0, y: 0.0, z: 1.0 });

export default Vector;
