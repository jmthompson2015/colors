import Vector from "../../artifact/Vector.js";

const round2 = (value) => Math.round(value * 100.0) / 100.0;

const round4 = (value) => Math.round(value * 10000.0) / 10000.0;

const TableColumns = [
  {
    key: "swatch",
    label: "Swatch",
    cellFunction: (data) =>
      ReactDOMFactories.div({
        className: "w-100",
        style: {
          backgroundColor: data.key,
          height: 32,
          width: 64,
        },
      }),
  },
  {
    key: "name",
    label: "CSS Name",
    className: "tl",
  },
  {
    key: "hex",
    label: "Hex",
    className: "tc",
  },
  {
    key: "decimal",
    label: "Decimal",
    className: "tc",
    cellFunction: (data) => `${data.r},${data.g},${data.b}`,
  },
  {
    key: "magnitude",
    label: "Magnitude",
    className: "tr",
    cellFunction: (data) => round2(data.magnitude),
  },
  {
    key: "onAxis",
    label: "On Axis",
    className: "tr",
    cellFunction: (data) => {
      let onAxis;
      const axisVector = data.axis ? data.axis.vector : undefined;
      if (axisVector) {
        const colorVector = Vector.unit(data.vector);
        onAxis = round4(Vector.dot(colorVector, axisVector));
      }
      return onAxis;
    },
  },
  {
    key: "offAxis",
    label: "Off Axis",
    className: "tr",
    cellFunction: (data) => {
      let offAxis;
      const axisVector = data.axis ? data.axis.vector : undefined;
      if (axisVector) {
        const colorVector = Vector.unit(data.vector);
        const myVector = Vector.cross(colorVector, axisVector);
        offAxis = round4(Vector.magnitude(myVector));
      }
      return offAxis;
    },
  },
];

export default TableColumns;
