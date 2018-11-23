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
    const h = document.getElementById("inputH").value;
    const s = document.getElementById("inputS").value;
    const l = document.getElementById("inputL").value;
    const newColor = Color.create({
      h: parseInt(h, 10),
      s: parseInt(s, 10),
      l: parseInt(l, 10)
    });

    onChange(newColor);
  }

  render() {
    const { color } = this.props;

    const inputH = React.createElement(NumberInput, {
      id: "inputH",
      onBlur: this.handleChange,
      initialValue: color.h,
      className: "filterField"
    });
    const inputS = React.createElement(NumberInput, {
      id: "inputS",
      onBlur: this.handleChange,
      initialValue: color.s,
      className: "filterField"
    });
    const inputL = React.createElement(NumberInput, {
      id: "inputL",
      onBlur: this.handleChange,
      initialValue: color.l,
      className: "filterField"
    });
    const inputA = React.createElement(NumberInput, {
      id: "inputA",
      onBlur: this.handleChange,
      initialValue: color.a,
      className: "filterField"
    });

    const cells = [
      ReactUtils.createCell("H", "labelH", "ph2"),
      ReactUtils.createCell(inputH, "inputH"),
      ReactUtils.createCell("S", "labelS", "ph2"),
      ReactUtils.createCell(inputS, "inputS"),
      ReactUtils.createCell("L", "labelL", "ph2"),
      ReactUtils.createCell(inputL, "inputL"),
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
