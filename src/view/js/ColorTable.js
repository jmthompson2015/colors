"use strict";

define(["create-react-class", "prop-types", "react", "react-dom-factories", "common/js/MathAugments", "view/js/DataTable", "view/js/TableColumns"],
   function(createReactClass, PropTypes, React, DOM, MathAugments, DataTable, TableColumns)
   {
      var ColorTable = createReactClass(
      {
         render: function()
         {
            var myRowData = this.props.rowData;
            var axis = this.props.axis;
            var axisVector = (axis ? axis.vector : undefined);

            var cellFunctions = {
               "swatch": function(data)
               {
                  return DOM.div(
                  {
                     className: "w-100",
                     style:
                     {
                        backgroundColor: data.key,
                        height: 32,
                        width: 64,
                     }
                  });
               },
               "decimal": function(data)
               {
                  return data.r + "," + data.g + "," + data.b;
               },
               "magnitude": function(data)
               {
                  return Math.colorFormat(data.magnitude, 2);
               },
               "onAxis": function(data)
               {
                  var onAxis;
                  if (axisVector)
                  {
                     var colorVector = data.vector.unit();
                     onAxis = Math.colorFormat(colorVector.dot(axisVector), 4);
                  }
                  return onAxis;
               },
               "offAxis": function(data)
               {
                  var offAxis;
                  if (axisVector)
                  {
                     var colorVector = data.vector.unit();
                     offAxis = Math.colorFormat(colorVector.cross(axisVector).magnitude(), 4);
                  }
                  return offAxis;
               },
            };

            var defaultSort = {
               column: "onAxis",
               direction: "desc",
            };

            var table = React.createElement(DataTable,
            {
               cellFunctions: cellFunctions,
               columns: TableColumns,
               rowData: myRowData,
               defaultSort: defaultSort,
            });

            return DOM.div(
            {
               className: "center tc",
            }, table);
         },
      });

      ColorTable.propTypes = {
         rowData: PropTypes.array.isRequired,

         axis: PropTypes.object,
      };

      return ColorTable;
   });
