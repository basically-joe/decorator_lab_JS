const assert = require("assert");
const Room = require("../models/room.js");

describe("Room", function() {


  beforeEach(function() {
    room = new Room (10);
  });

  it("should have and area in squared meters", function() {
    const actual = room.area;
    assert.strictEqual(actual, 10);
  });

  it("should start unpainted", function() {
    const actual = room.painted;
    assert.strictEqual(actual, false)
  });

  it("should be able to be painted", function() {
    const actual = room.bePainted();
    assert.strictEqual(actual, true)
  });


});
