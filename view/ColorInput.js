import Color from "../state/Color.js";

import NumberInput from "./NumberInput.js";
import ReactUtils from "./ReactUtilities.js";

class ColorInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction() {
    const { onChange } = this.props;
    const r = document.getElementById("inputR").value;
    const g = document.getElementById("inputG").value;
    const b = document.getElementById("inputB").value;
    const newColor = Color.create({
      r: parseInt(r, 10),
      g: parseInt(g, 10),
      b: parseInt(b, 10)
    });

    onChange(newColor);
  }

  render() {
    const { color } = this.props;

    const inputR = React.createElement(NumberInput, {
      id: "inputR",
      onBlur: this.handleChange,
      initialValue: color.r,
      className: "filterField"
    });
    const inputG = React.createElement(NumberInput, {
      id: "inputG",
      onBlur: this.handleChange,
      initialValue: color.g,
      className: "filterField"
    });
    const inputB = React.createElement(NumberInput, {
      id: "inputB",
      onBlur: this.handleChange,
      initialValue: color.b,
      className: "filterField"
    });
    const inputA = React.createElement(NumberInput, {
      id: "inputA",
      onBlur: this.handleChange,
      initialValue: color.a,
      className: "filterField"
    });

    const cells = [
      ReactUtils.createCell("R", "labelR", "ph2"),
      ReactUtils.createCell(inputR, "inputR"),
      ReactUtils.createCell("G", "labelG", "ph2"),
      ReactUtils.createCell(inputG, "inputG"),
      ReactUtils.createCell("B", "labelB", "ph2"),
      ReactUtils.createCell(inputB, "inputB"),
      ReactUtils.createCell("A", "labelA", "ph2"),
      ReactUtils.createCell(inputA, "inputA")
    ];

    const row = ReactUtils.createRow(cells, "colorInputRow");

    return ReactUtils.createTable(row);
  }
}

ColorInput.propTypes = {
  color: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorInput;
