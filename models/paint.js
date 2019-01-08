const Paint = function (amount, remove) {
  this.amount = amount;
  this.remove = remove;
};


Paint.prototype.checkEmpty = function () {
  if (this.amount > 0) return false;
};

Paint.prototype.emptyItself = function (paint) {
  let newVolume = this.amount - this.remove;
    return newVolume;
}

module.exports = Paint;
