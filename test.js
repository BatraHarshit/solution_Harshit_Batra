let test_data = require("./test_inputs.js");
let getResult = require("./findSubset.js");

const assert = require("assert");

describe("While creating subset", function () {
  context("have no input arguments", function () {
    it("should return an error", function () {
      assert.throws(() => getResult.findSubset(), "No Input!");
    });
  });
  context("have invalid input arguments", function () {
    it("show throw an error", function () {
      assert.throws(
        () => getResult.findSubset({ abc: 9011 }),
        "Invalid Arguments"
      );
    });
  });
  context("with valid arguments", function () {
    it("should have equal array length", function () {
      assert.equal(
        test_data.output.length,
        getResult.findSubset(test_data.input).length
      );
    });
  });
});
