const Room = function(area) {
  this.area = area;
  this.painted = false;
};

Room.prototype.bePainted = function () {
  if (this.painted === false) return true;
};

module.exports = Room;
