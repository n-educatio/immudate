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

test('date addition test', function (t) {
  var now = immudate.now();
  t.plan(1);

  t.equal(Number(now.plusHours(24)), Number(now.date.setHours(now.date.getHours() + 24)));
});

test('immutability test', function (t) {
  var now = immudate.now();
  var nowCopy = _.extend({}, now);
  t.plan(1);
  now.plusHours(3);

  t.equal(now.date, nowCopy.date);
});
