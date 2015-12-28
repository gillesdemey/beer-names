var beers = require('./index')
var test = require('tape')

test('it should return a random beer', function (t) {
  t.plan(2)
  t.ok(beers.random())
  t.not(beers.random(), beers.random())
})
