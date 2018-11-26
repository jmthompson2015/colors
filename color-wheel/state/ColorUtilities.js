const ColorUtilities = {};

ColorUtilities.toString = color => `${color.h}, ${color.s}%, ${color.l}%`;

ColorUtilities.toStyle = color => `hsl(${color.h}, ${color.s}%, ${color.l}%)`;

Object.freeze(ColorUtilities);

export default ColorUtilities;
