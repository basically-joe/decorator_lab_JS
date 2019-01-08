const Decorator = function(stock) {
  this.stock = stock;
};

Decorator.prototype.addStock = function (number) {
  newStock = this.stock + number;
  return newStock;
};

module.exports = Decorator;
