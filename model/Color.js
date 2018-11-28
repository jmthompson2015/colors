// see https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e

import CU from "./ColorUtilities.js";

const Color = {};

const mod = (x, n) => ((x % n) + n) % n;

Color.create = ({ name, h = 0, s = 100, l = 50 } = {}) => {
  const h2 = mod(h, 360);

  return Immutable({ name, h: h2, s, l });
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Achromatic Grays
Color.WHITE = Color.create({ name: "White", s: 0, l: 100 });
Color.GAINSBORO = Color.create(R.merge(CU.rgbToHsl(220, 220, 220), { name: "Gainsboro" }));
Color.LIGHT_GRAY = Color.create(R.merge(CU.rgbToHsl(211, 211, 211), { name: "Light Gray" }));
Color.SILVER = Color.create(R.merge(CU.rgbToHsl(192, 192, 192), { name: "Silver" }));
Color.SPANISH_GRAY = Color.create(R.merge(CU.rgbToHsl(152, 152, 152), { name: "Spanish Gray" }));
Color.GRAY = Color.create(R.merge(CU.rgbToHsl(128, 128, 128), { name: "Gray" }));
Color.DIM_GRAY = Color.create(R.merge(CU.rgbToHsl(105, 105, 105), { name: "Dim Gray" }));
Color.DAVYS_GRAY = Color.create(R.merge(CU.rgbToHsl(85, 85, 85), { name: "Davy's Gray" }));
Color.JET = Color.create(R.merge(CU.rgbToHsl(52, 52, 52), { name: "Jet" }));
Color.BLACK = Color.create({ name: "Black", s: 0, l: 0 });

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Off-Grays
Color.PLATINUM = Color.create(R.merge(CU.rgbToHsl(229, 228, 226), { name: "Platinum" }));
Color.ASH_GRAY = Color.create(R.merge(CU.rgbToHsl(178, 190, 181), { name: "Ash Gray" }));
Color.BATTLESHIP_GRAY = Color.create(
  R.merge(CU.rgbToHsl(132, 132, 130), { name: "Battleship Gray" })
);
Color.NICKEL = Color.create(R.merge(CU.rgbToHsl(114, 116, 114), { name: "Nickel" }));
Color.GUNMETAL = Color.create(R.merge(CU.rgbToHsl(42, 52, 57), { name: "Gunmetal" }));
Color.CHARCOAL = Color.create(R.merge(CU.rgbToHsl(54, 69, 79), { name: "Charcoal" }));

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Cool Grays
Color.BLUE_GRAY = Color.create(R.merge(CU.rgbToHsl(102, 153, 204), { name: "Blue-Gray" }));
Color.COOL_GRAY = Color.create(R.merge(CU.rgbToHsl(144, 144, 192), { name: "Cool Gray" }));
Color.GLAUCOUS = Color.create(R.merge(CU.rgbToHsl(96, 130, 182), { name: "Glaucous" }));
Color.CADET_GRAY = Color.create(R.merge(CU.rgbToHsl(145, 163, 176), { name: "Cadet Gray" }));
Color.SLATE_GRAY = Color.create(R.merge(CU.rgbToHsl(112, 128, 144), { name: "Slate Gray" }));
Color.GRAY_GREEN = Color.create(R.merge(CU.rgbToHsl(94, 113, 106), { name: "Gray-Green" }));
Color.MARENGO = Color.create(R.merge(CU.rgbToHsl(76, 88, 102), { name: "Marengo" }));

// /////////////////////////////////////////////////////////////////////////////////////////////////
// Warm Grays
Color.PUCE = Color.create(R.merge(CU.rgbToHsl(204, 136, 153), { name: "Puce" }));
Color.CINEREOUS = Color.create(R.merge(CU.rgbToHsl(152, 129, 123), { name: "Cinereous" }));
Color.ROCKET_METALLIC = Color.create(
  R.merge(CU.rgbToHsl(138, 129, 141), { name: "Rocket Metallic" })
);
Color.ROSE_QUARTZ = Color.create(R.merge(CU.rgbToHsl(170, 152, 169), { name: "Rose Quartz" }));
Color.TAUPE = Color.create(R.merge(CU.rgbToHsl(72, 60, 50), { name: "Taupe" }));

Object.freeze(Color);

export default Color;
