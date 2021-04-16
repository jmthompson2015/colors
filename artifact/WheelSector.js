const WheelSector = {
  RED: "red",
  ORANGE: "orange",
  YELLOW: "yellow",
  CHARTREUSE: "chartreuse",
  GREEN: "green",
  SPRING_GREEN: "spring green",
  CYAN: "cyan",
  AZURE: "azure",
  BLUE: "blue",
  VIOLET: "violet",
  MAGENTA: "magenta",
  ROSE: "rose",
  GRAY: "gray",

  properties: {
    red: {
      name: "Red",
      angle: 0,
      key: "red",
    },
    orange: {
      name: "Orange",
      angle: 30,
      key: "orange",
    },
    yellow: {
      name: "Yellow",
      angle: 60,
      key: "yellow",
    },
    chartreuse: {
      name: "Chartreuse",
      angle: 90,
      key: "chartreuse",
    },
    green: {
      name: "Green",
      angle: 120,
      key: "green",
    },
    "spring green": {
      name: "Spring Green",
      angle: 150,
      key: "spring green",
    },
    cyan: {
      name: "Cyan",
      angle: 180,
      key: "cyan",
    },
    azure: {
      name: "Azure",
      angle: 210,
      key: "azure",
    },
    blue: {
      name: "Blue",
      angle: 240,
      key: "blue",
    },
    violet: {
      name: "Violet",
      angle: 270,
      key: "violet",
    },
    magenta: {
      name: "Magenta",
      angle: 300,
      key: "magenta",
    },
    rose: {
      name: "Rose",
      angle: 330,
      key: "rose",
    },
    gray: {
      name: "Gray",
      key: "gray",
    },
  },
};

WheelSector.keys = () => Object.keys(WheelSector.properties);

WheelSector.values = () => Object.values(WheelSector.properties);

WheelSector.wheelSector = (sectorKey) => WheelSector.properties[sectorKey];

WheelSector.sectorKey = (color) => {
  let answer;

  if (color) {
    const delta = 15;
    const reduceFunction = (accum, sector) => {
      const { h, s } = color;

      if (s === 0) {
        return WheelSector.GRAY;
      }

      if ((360 - delta < h && h <= 360) || (h >= 0 && h <= delta)) {
        return WheelSector.RED;
      }

      const low = sector.angle - delta;
      const high = sector.angle + delta;

      if (low < h && h <= high) {
        return sector.key;
      }

      return accum;
    };

    answer = R.reduce(reduceFunction, undefined, WheelSector.values());
  }

  return answer;
};

WheelSector.sector = (color) => {
  let answer;

  if (color) {
    const sectorKey = WheelSector.sectorKey(color);
    answer = WheelSector.wheelSector(sectorKey);
  }

  return answer;
};

Object.freeze(WheelSector);

export default WheelSector;
