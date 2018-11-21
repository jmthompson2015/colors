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
  CYAN: "cyan",
  MAGENTA: "magenta",
  // Tertiary
  ORANGE: "orange",
  CHARTREUSE: "chartreuse",
  SPRING_GREEN: "springGreen",
  AZURE: "azure",
  VIOLET: "violet",
  ROSE: "rose",
  // Other
  GRAY: "gray",

  properties: {
    red: {
      name: "Red",
      r: 1.0,
      g: 0.0,
      b: 0.0,
      key: "red"
    },
    green: {
      name: "Green",
      r: 0.0,
      g: 1.0,
      b: 0.0,
      key: "green"
    },
    blue: {
      name: "Blue",
      r: 0.0,
      g: 0.0,
      b: 1.0,
      key: "blue"
    },
    yellow: {
      name: "Yellow",
      r: 0.7071,
      g: 0.7071,
      b: 0.0,
      key: "yellow"
    },
    magenta: {
      name: "Magenta",
      r: 0.7071,
      g: 0.0,
      b: 0.7071,
      key: "magenta"
    },
    cyan: {
      name: "Cyan",
      r: 0.0,
      g: 0.7071,
      b: 0.7071,
      key: "cyan"
    },
    orange: {
      name: "Orange",
      r: 0.8944,
      g: 0.4472,
      b: 0.0,
      key: "orange"
    },
    chartreuse: {
      name: "Chartreuse",
      r: 0.4472,
      g: 0.8944,
      b: 0.0,
      key: "chartreuse"
    },
    springGreen: {
      name: "Spring Green",
      r: 0.0,
      g: 0.8944,
      b: 0.4472,
      key: "springGreen"
    },
    azure: {
      name: "Azure",
      r: 0.0,
      g: 0.4472,
      b: 0.8944,
      key: "azure"
    },
    violet: {
      name: "Violet",
      r: 0.4472,
      g: 0.0,
      b: 0.8944,
      key: "violet"
    },
    rose: {
      name: "Rose",
      r: 0.8944,
      g: 0.0,
      b: 0.4472,
      key: "rose"
    },
    gray: {
      name: "Gray",
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
