var test = require('tape');
var _ = require('lodash');
var immudate = require('./index');

test('past date cration test', function (t) {
  t.plan(1);

  t.ok(immudate.past() < new Date());
});

test('future date cration test', function (t) {
  t.plan(1);

  t.ok(immudate.future() > new Date());
});

test('date addition test - hours', function (t) {
  var now = immudate.now();
  t.plan(1);

  t.equal(Number(now.plusHours(24)), Number(now.date.setHours(now.date.getHours() + 24)));
});

test('date addition test - minutes', function (t) {
  var now = immudate.now();
  t.plan(1);

  t.equal(Number(now.plusMinutes(15)), Number(now.date.setMinutes(now.date.getMinutes() + 15)));
});

test('date substraction test - minutes', function (t) {
  var now = immudate.now();
  t.plan(1);

  t.equal(Number(now.minusMinutes(15)), Number(now.date.setMinutes(now.date.getMinutes() - 15)));
});

test('date substraction test - hours', function (t) {
  var now = immudate.now();
  t.plan(1);

  t.equal(Number(now.minusHours(11)), Number(now.date.setHours(now.date.getHours() - 11)));
});

test('immutability test', function (t) {
  var now = immudate.now();
  var nowCopy = _.extend({}, now);
  t.plan(1);
  now.plusHours(3);
  now.plusMinutes(10);
  now.minusMinutes(13);

  t.equal(now.date, nowCopy.date);
});
