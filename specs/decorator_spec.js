const assert = require("assert");
const Decorator = require("../models/decorator");


describe("Decorator", function() {

  beforeEach(function() {
    decorator = new Decorator(0);
  });

  it("It should start with empty paint stock", function() {
    const actual = decorator.stock;
    assert.strictEqual(actual, 0);
  });

  it("It should be able to add a can of paint to stock", function() {
    const actual = decorator.addStock(10);
    assert.strictEqual(actual, 10);
  });

  it("It should be able to calculate total litres of paint in stock", function () {
    decorator.addStock()
    const actual = decorator.stockCount();
    assert.strictEqual(actual, 10)
  })

});
