"use strict";

define(function()
{
   var TableColumns = [
      {
         key: "swatch",
         label: "Swatch",
       },
      {
         key: "displayName",
         label: "Name",
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
        },
      {
         key: "magnitude",
         label: "Magnitude",
         className: "tr",
         },
      {
         key: "onAxis",
         label: "On Axis",
         className: "tr",
       },
      {
         key: "offAxis",
         label: "Off Axis",
         className: "tr",
        },
     ];

   return TableColumns;
});
