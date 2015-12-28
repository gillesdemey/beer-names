# beer-names

> Get a unique random name that sounds like it could be a beer

The name list is just a [JSON file](beer.json) and can be used wherever.


## Install

```
$ npm install --save beer-names
```


## Usage

```js
var beer = require('beer-names')

beer.random();
//=> 'Retro Knight Imperial Stout'
```


## API

### .random()

Type: `function`

Random beer name.


## CLI

```
$ npm install --global beer-names
```

```
$ beer-names --help

  Examples
    $ beer-names
    Retro Knight Imperial Stout
```


## Related

- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names
- [superb](https://github.com/sindresorhus/superb) - Get superb like words
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names
- [yes-no-words](https://github.com/sindresorhus/yes-no-words) - Get yes/no like words


## License

ISC © [Gilles De Mey](http://gilles.demey.io)
