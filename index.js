var inspiration = require('./beer.json')
var uniqueRandomArray = require('unique-random-array')

exports.random = function () {
  var prefix = uniqueRandomArray(inspiration.prefix)
  var name = uniqueRandomArray(inspiration.name)
  var suffix = uniqueRandomArray(inspiration.suffix)

  var beer = prefix() + ' ' + name() + ' ' + suffix()
  return beer
}
