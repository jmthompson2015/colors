const EnumUtilities = {};

EnumUtilities.keys = enumClass => Object.keys(enumClass.properties);

EnumUtilities.values = enumClass => Object.values(enumClass.properties);

Object.freeze(EnumUtilities);

export default EnumUtilities;
