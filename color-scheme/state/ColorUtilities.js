import Color from "./Color.js";

const ColorUtilities = {};

ColorUtilities.achromatic = color => Color.create({ h: color.h, s: 0, l: color.l });

ColorUtilities.analogousLeft = color => Color.create({ h: color.h - 30, s: color.s, l: color.l });

ColorUtilities.analogousRight = color => Color.create({ h: color.h + 30, s: color.s, l: color.l });

ColorUtilities.complementary = color => Color.create({ h: color.h + 180, s: color.s, l: color.l });

ColorUtilities.createRGB = ({ name, r = 0, g = 0, b = 0, a = 1.0 } = {}) => {
  const hsl = ColorUtilities.rgbToHsl(r, g, b);
  return Color.create({ name, h: hsl.h, s: hsl.s, l: hsl.l, a });
};

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param   {number}  r       The red color value
 * @param   {number}  g       The green color value
 * @param   {number}  b       The blue color value
 * @return  {Array}           The HSL representation
 */
ColorUtilities.rgbToHsl = (r0, g0, b0) => {
  const r = r0 / 255;
  const g = g0 / 255;
  const b = b0 / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    // achromatic
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        throw new Error("something went wrong");
    }
    h /= 6;
  }

  return { h: Math.round(360 * h), s: Math.round(100 * s), l: Math.round(100 * l) };
};

ColorUtilities.toString = color => `${color.h}\u00B0, ${color.s}%, ${color.l}%, ${color.a}`;

ColorUtilities.toStyle = color => `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`;

Object.freeze(ColorUtilities);

export default ColorUtilities;
