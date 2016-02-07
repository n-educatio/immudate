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

test('custom date constructor test - date string as argument', function (t) {
  t.plan(1)
  t.equal(Number(immudate('February 05, 2016 03:24:00').date), Number(new Date('February 05, 2016 03:24:00')))
});

test('custom date constructor test - date object as argument', function (t) {
  t.plan(1)
  t.equal(Number(immudate(new Date('January 03, 2015 01:13:00')).date), Number(new Date('January 03, 2015 01:13:00')))
});

test('custom date constructor test - now as default value', function (t) {
  t.plan(1)
  t.ok(Number(immudate().date) <= Number(new Date()))
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
