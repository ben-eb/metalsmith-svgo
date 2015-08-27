# [metalsmith][metalsmith]-svgo [![Build Status](https://travis-ci.org/ben-eb/metalsmith-svgo.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/metalsmith-svgo.svg)][npm] [![Dependency Status](https://gemnasium.com/ben-eb/metalsmith-svgo.svg)][deps]

> Compress SVG with Metalsmith.

*If you have any issues with the output of this plugin, please use the
[svgo tracker](https://github.com/svg/svgo/issues).*

## Install

With [npm](https://npmjs.org/package/metalsmith-svgo) do:

```
npm install metalsmith-svgo --save
```

## Example

```js
var svgo       = require('metalsmith-svgo'),
    Metalsmith = require('metalsmith');

Metalsmith('fixtures')
    .use(svgo())
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```

With custom options:

```js
Metalsmith('fixtures')
    .use(svgo({
        plugins: [{
            removeDoctype: false
        }, {
            removeComments: false
        }, {
            cleanupNumericValues: {
                floatPrecision: 2
            }
        }, {
            convertColors: {
                names2hex: false,
                rgb2hex: false
            }
        }]
    }))
    .build(function (err) {
        if (err) {
            throw err;
        }
    });
```

## Options

See the [svgo documentation](https://github.com/svg/svgo).

## Contributing

Pull requests are welcome. If you add functionality, then please add unit
tests to cover it.

## License

MIT © Ben Briggs

[ci]:         https://travis-ci.org/ben-eb/metalsmith-svgo
[deps]:       https://gemnasium.com/ben-eb/metalsmith-svgo
[metalsmith]: https://github.com/segmentio/metalsmith
[npm]:        http://badge.fury.io/js/metalsmith-svgo
