// see https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion

import Color from "./Color.js";

const ColorUtilities = {};

ColorUtilities.achromatic = color => {
  const max = Math.max(color.r, Math.max(color.g, color.b));
  return Color.create({ r: max, g: max, b: max });
};

ColorUtilities.analogousLeft = color => {
  const hsl0 = ColorUtilities.rgbToHsl(color.r, color.g, color.b);
  let h1 = hsl0.h - 1.0 / 12.0;

  if (h1 < 0.0) {
    h1 += 1.0;
  }

  const rgb = ColorUtilities.hslToRgb(h1, hsl0.s, hsl0.l);

  return Color.create({ r: rgb.r, g: rgb.g, b: rgb.b });
};

ColorUtilities.analogousRight = color => {
  const hsl0 = ColorUtilities.rgbToHsl(color.r, color.g, color.b);
  let h1 = hsl0.h + 1.0 / 12.0;

  if (h1 > 1.0) {
    h1 -= 1.0;
  }

  const rgb = ColorUtilities.hslToRgb(h1, hsl0.s, hsl0.l);

  return Color.create({ r: rgb.r, g: rgb.g, b: rgb.b });
};

ColorUtilities.complementary = color =>
  Color.create({
    r: 255 - color.r,
    g: 255 - color.g,
    b: 255 - color.b
  });

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
ColorUtilities.hslToRgb = (h, s, l) => {
  let r;
  let g;
  let b;

  if (s === 0) {
    // achromatic
    r = l;
    g = l;
    b = l;
  } else {
    const hue2rgb = (p, q, t0) => {
      let t = t0;
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
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

  return { h, s, l };
};

ColorUtilities.toString = color => `${color.r}, ${color.g}, ${color.b}, ${color.a}`;

ColorUtilities.toStyle = color => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

Object.freeze(ColorUtilities);

export default ColorUtilities;
