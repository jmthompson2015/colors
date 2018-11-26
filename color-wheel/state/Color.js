// see https://dev.to/maurobringolf/a-neat-trick-to-compute-modulo-of-negative-numbers-111e

const Color = {};

const mod = (x, n) => ((x % n) + n) % n;

Color.create = ({ name, h = 0, s = 100, l = 50, components } = {}) => {
  const h2 = mod(h, 360);
  return Immutable({ name, h: Math.round(h2), s: Math.round(s), l: Math.round(l), components });
};

Color.BLACK = Color.create({ name: "Black", s: 0, l: 0 });
Color.GRAY = Color.create({ name: "Gray", s: 0 });
Color.WHITE = Color.create({ name: "White", s: 0, l: 100 });

Color.RED = Color.create({ name: "Red", h: 0 });
Color.ORANGE = Color.create({ name: "Orange", h: 30, components: "\u00BD (red + yellow)" });
Color.YELLOW = Color.create({ name: "Yellow", h: 60, components: "red + green" });
Color.CHARTREUSE_GREEN = Color.create({
  name: "Chartreuse Green",
  h: 90,
  components: "\u00BD (yellow + green)"
});
Color.GREEN = Color.create({ name: "Green", h: 120 });
Color.SPRING_GREEN = Color.create({
  name: "Spring Green",
  h: 150,
  components: "\u00BD (green + cyan)"
});
Color.CYAN = Color.create({ name: "Cyan", h: 180, components: "green + blue" });
Color.AZURE = Color.create({ name: "Azure", h: 210, components: "\u00BD (cyan + blue)" });
Color.BLUE = Color.create({ name: "Blue", h: 240 });
Color.VIOLET = Color.create({ name: "Violet", h: 270, components: "\u00BD (blue + magenta)" });
Color.MAGENTA = Color.create({ name: "Magenta", h: 300, components: "blue + red" });
Color.ROSE = Color.create({ name: "Rose", h: 330, components: "\u00BD (magenta + red)" });

Color.MAROON = Color.create({ name: "Maroon", l: 25, components: "\u00BD red" });
Color.DARK_GREEN = Color.create({ name: "Dark Green", h: 120, l: 25, components: "\u00BD green" });
Color.NAVY = Color.create({ name: "Navy", h: 240, l: 25, components: "\u00BD blue" });

Color.OLIVE = Color.create({ name: "Olive", h: 60, l: 25, components: "\u00BD (red + green)" });
Color.TEAL = Color.create({ name: "Teal", h: 180, l: 25, components: "\u00BD (green + blue)" });
Color.PURPLE = Color.create({ name: "Purple", h: 300, l: 25, components: "\u00BD (blue + red)" });

Object.freeze(Color);

export default Color;
