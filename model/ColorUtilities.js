// see https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion

const ColorUtilities = {};

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h is in the set [0, 360], and s and l are contained in the set [0, 100] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Object}          The RGB representation
 */
ColorUtilities.hslToRgb = (h0, s0, l0) => {
  const h = h0 / 360;
  const s = s0 / 100;
  const l = l0 / 100;
  let r;
  let g;
  let b;

  if (s === 0) {
    r = l; // achromatic
    g = l; // achromatic
    b = l; // achromatic
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

  return { r: r * 255, g: g * 255, b: b * 255 };
};

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h in the set [0, 360], and s and l in the set [0, 100].
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
    h = 0; // achromatic
    s = 0; // achromatic
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
        throw new Error(`Unknown max: ${max}`);
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

ColorUtilities.toString = color =>
  `${Math.round(color.h)}, ${Math.round(color.s)}%, ${Math.round(color.l)}%`;

ColorUtilities.toStringRgb = rgb =>
  `${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}`;

ColorUtilities.toStyle = color =>
  `hsl(${Math.round(color.h)}, ${Math.round(color.s)}%, ${Math.round(color.l)}%)`;

Object.freeze(ColorUtilities);

export default ColorUtilities;
