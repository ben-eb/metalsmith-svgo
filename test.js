'use strict';

var test       = require('tape'),
    equal      = require('assert-dir-equal'),
    svgo       = require('./'),
    Metalsmith = require('metalsmith');

test('should convert svg files', function (t) {
    t.plan(1);

    Metalsmith('fixtures')
        .use(svgo())
        .build(function (err) {
            if (err) {
                console.log(err)
                t.fail();
            }
            t.doesNotThrow(function () {
                equal('fixtures/build', 'fixtures/expected');
            });
        });
});
