const Color = {};

Color.create = ({ name, r = 0, g = 0, b = 0, a = 1.0 } = {}) => Immutable({ name, r, g, b, a });

Color.RED = Color.create({ name: "Red", r: 255 });
Color.ORANGE = Color.create({ name: "Orange", r: 255, g: 127 });
Color.YELLOW = Color.create({ name: "Yellow", r: 255, g: 255 });
Color.CHARTREUSE_GREEN = Color.create({ name: "Chartreuse Green", r: 127, g: 255 });
Color.GREEN = Color.create({ name: "Green", g: 255 });
Color.SPRING_GREEN = Color.create({ name: "Spring Green", g: 255, b: 127 });
Color.CYAN = Color.create({ name: "Cyan", g: 255, b: 255 });
Color.AZURE = Color.create({ name: "Azure", g: 127, b: 255 });
Color.BLUE = Color.create({ name: "Blue", b: 255 });
Color.VIOLET = Color.create({ name: "Violet", r: 127, b: 255 });
Color.MAGENTA = Color.create({ name: "Magenta", r: 255, b: 255 });
Color.ROSE = Color.create({ name: "Rose", r: 255, b: 127 });

Object.freeze(Color);

export default Color;
