import RGBAxis from "../model/RGBAxis.js";

const createOption = key => {
  const rgbAxis = RGBAxis.properties[key];

  return ReactDOMFactories.option({ key, value: key }, rgbAxis.name);
};

const createOptgroup = (group, keys) => {
  const options = R.map(createOption, keys);

  return ReactDOMFactories.optgroup({ key: group, label: group }, options);
};

const groupToKeys = {
  Primary: ["red", "green", "blue"],
  Secondary: ["yellow", "cyan", "magenta"],
  Tertiary: ["orange", "chartreuse", "springGreen", "azure", "violet", "rose"],
  Other: ["gray"]
};

class AxisSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction() {
    const { onChange } = this.props;
    const axisSelect = document.getElementById("axisSelect");
    const selected = axisSelect.options[axisSelect.selectedIndex].value;
    onChange(selected);
  }

  render() {
    const { axisKey } = this.props;
    const options0 = [ReactDOMFactories.option({ key: "-none-" }, "-none-")];
    const optgroups = R.map(
      group => createOptgroup(group, groupToKeys[group]),
      Object.keys(groupToKeys)
    );

    return ReactDOMFactories.select(
      { id: "axisSelect", defaultValue: axisKey, onChange: this.handleChange },
      options0,
      optgroups
    );
  }
}

AxisSelect.propTypes = {
  onChange: PropTypes.func.isRequired,

  axisKey: PropTypes.string
};

AxisSelect.defaultProps = {
  axisKey: undefined
};

export default AxisSelect;
