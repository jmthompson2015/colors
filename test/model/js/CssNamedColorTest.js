"use strict";

define(["qunit", "model/js/CssNamedColor"],
   function(QUnit, CssNamedColor)
   {
      QUnit.module("CssNamedColor");

      QUnit.test("CssNamedColor properties AliceBlue", function(assert)
      {
         var colorKey = CssNamedColor.ALICE_BLUE;
         var properties = CssNamedColor.properties[colorKey];
         assert.equal(properties.displayName, "AliceBlue");
         assert.equal(properties.hex, "#F0F8FF");
         assert.equal(properties.r, 240);
         assert.equal(properties.g, 248);
         assert.equal(properties.b, 255);
         assert.equal(properties.key, "AliceBlue");
      });

      QUnit.test("keys and values", function(assert)
      {
         // Setup.

         // Run.
         var result = CssNamedColor.keys();
         var ownPropertyNames = Object.getOwnPropertyNames(CssNamedColor);

         // Verify.
         ownPropertyNames.forEach(function(key)
         {
            var key2 = CssNamedColor[key];

            if (key !== "properties" && typeof key2 === "string")
            {
               assert.ok(CssNamedColor.properties[key2], "Missing value for key = " + key);
            }
         });

         result.forEach(function(value)
         {
            var p = ownPropertyNames.filter(function(key)
            {
               return CssNamedColor[key] === value;
            });

            assert.equal(p.length, 1, "Missing key for value = " + value);
         });
      });

      QUnit.test("CssNamedColor.keys()", function(assert)
      {
         // Run.
         var result = CssNamedColor.keys();

         // Verify.
         assert.ok(result);
         var length = 139;
         assert.equal(result.length, length);
         assert.equal(result[0], CssNamedColor.ALICE_BLUE);
         assert.equal(result[length - 1], CssNamedColor.YELLOW_GREEN);
      });
   });
