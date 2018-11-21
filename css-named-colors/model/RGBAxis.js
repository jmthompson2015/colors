import EnumUtils from "./EnumUtilities.js";
import Vector from "./Vector.js";
import VectorUtils from "./VectorUtilities.js";

/*
 * Provides a color axis for each fundamental color as a unit vector in RGB
 * space. Note that these axes differ from the CSS named colors (even though
 * some of the names are the same).
 */
const RGBAxis = {
  // Primary
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
  // Secondary
  YELLOW: "yellow",
  MAGENTA: "magenta",
  CYAN: "cyan",
  // Tertiary
  ORANGE: "orange",
  ROSE: "rose",
  CHARTREUSE: "chartreuse",
  SPRING_GREEN: "springGreen",
  VIOLET: "violet",
  AZURE: "azure",
  // Other
  GRAY: "gray",

  properties: {
    red: {
      r: 1.0,
      g: 0.0,
      b: 0.0,
      key: "red"
    },
    green: {
      r: 0.0,
      g: 1.0,
      b: 0.0,
      key: "green"
    },
    blue: {
      r: 0.0,
      g: 0.0,
      b: 1.0,
      key: "blue"
    },
    yellow: {
      r: 0.7071,
      g: 0.7071,
      b: 0.0,
      key: "yellow"
    },
    magenta: {
      r: 0.7071,
      g: 0.0,
      b: 0.7071,
      key: "magenta"
    },
    cyan: {
      r: 0.0,
      g: 0.7071,
      b: 0.7071,
      key: "cyan"
    },
    orange: {
      r: 0.8944,
      g: 0.4472,
      b: 0.0,
      key: "orange"
    },
    rose: {
      r: 0.8944,
      g: 0.0,
      b: 0.4472,
      key: "rose"
    },
    chartreuse: {
      r: 0.4472,
      g: 0.8944,
      b: 0.0,
      key: "chartreuse"
    },
    springGreen: {
      r: 0.0,
      g: 0.8944,
      b: 0.4472,
      key: "springGreen"
    },
    violet: {
      r: 0.4472,
      g: 0.0,
      b: 0.8944,
      key: "violet"
    },
    azure: {
      r: 0.0,
      g: 0.4472,
      b: 0.8944,
      key: "azure"
    },
    gray: {
      r: 0.5774,
      g: 0.5774,
      b: 0.5774,
      key: "gray"
    }
  }
};

R.forEach(axisKey => {
  const axis = RGBAxis.properties[axisKey];
  axis.vector = Vector.create({ x: axis.r, y: axis.g, z: axis.b });
  axis.magnitude = VectorUtils.magnitude(axis.vector);
}, EnumUtils.keys(RGBAxis));

Object.freeze(RGBAxis);

export default RGBAxis;
