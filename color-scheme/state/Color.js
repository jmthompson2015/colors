const Color = {};

Color.create = ({ name, h = 0, s = 100, l = 50, a = 1.0 } = {}) => {
  const h1 = h < 0 ? h + 360 : h;
  const h2 = h1 > 360 ? h1 - 360 : h1;
  return Immutable({ name, h: h2, s, l, a });
};

Color.BLACK = Color.create({ name: "Black", s: 0, l: 0 });
Color.GRAY = Color.create({ name: "Gray", s: 0 });
Color.WHITE = Color.create({ name: "White", s: 0, l: 100 });

Color.RED = Color.create({ name: "Red", h: 0 });
Color.ORANGE = Color.create({ name: "Orange", h: 30 });
Color.YELLOW = Color.create({ name: "Yellow", h: 60 });
Color.CHARTREUSE_GREEN = Color.create({ name: "Chartreuse Green", h: 90 });
Color.GREEN = Color.create({ name: "Green", h: 120 });
Color.SPRING_GREEN = Color.create({ name: "Spring Green", h: 150 });
Color.CYAN = Color.create({ name: "Cyan", h: 180 });
Color.AZURE = Color.create({ name: "Azure", h: 210 });
Color.BLUE = Color.create({ name: "Blue", h: 240 });
Color.VIOLET = Color.create({ name: "Violet", h: 270 });
Color.MAGENTA = Color.create({ name: "Magenta", h: 300 });
Color.ROSE = Color.create({ name: "Rose", h: 330 });

Object.freeze(Color);

export default Color;
