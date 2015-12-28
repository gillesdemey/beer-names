#!/usr/bin/env node
var meow = require('meow')
var beerNames = require('./')

meow([
  'Examples',
  '  $ beer-names',
	'  Retro Knight Imperial Stout'
])

console.log(beerNames.random())
