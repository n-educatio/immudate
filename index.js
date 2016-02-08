var _ = require('lodash');

function Immudate (date) {
  this.date = date;
}

Immudate.prototype.valueOf = function () {
  return this.date.valueOf();
}

Immudate.prototype.plusHours = function (hours) {
  var date = new Date(this.date.valueOf());

  return new Immudate(date.setHours(date.getHours() + hours));
}

Immudate.prototype.plusMinutes = function (minutes) {
  var date = new Date(this.date.valueOf());

  return new Immudate(date.setMinutes(date.getMinutes() + minutes));
}

Immudate.prototype.minusMinutes = function (minutes) {
  var date = new Date(this.date.valueOf());

  return new Immudate(date.setMinutes(date.getMinutes() - minutes));
}

Immudate.prototype.minusHours = function (hours) {
  var date = new Date(this.date.valueOf());

  return new Immudate(date.setHours(date.getHours() - hours));
}

module.exports = function () {
  var date = arguments.length > 0 ? new Date(arguments[0]) : new Date();

  return new Immudate(date);
}

module.exports.now = function () {
  return new Immudate(new Date());
}

module.exports.past = function () {
  return new Immudate(new Date().setMinutes(new Date().getMinutes() - 60));
}

module.exports.future = function () {
  return new Immudate(new Date().setMinutes(new Date().getMinutes() + 60));
}
