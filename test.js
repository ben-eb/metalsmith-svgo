var ava        = require('ava'),
    equal      = require('assert-dir-equal'),
    svgo       = require('./'),
    metalsmith = require('metalsmith');

ava('should convert svg files', function (t) {
    return new Promise(function (resolve) {
        metalsmith('fixtures')
            .use(svgo())
            .build(function (err) {
                t.notOk(err, 'should not error');
                t.doesNotThrow(function () {
                    equal('fixtures/build', 'fixtures/expected');
                });
                resolve();
            });
    });
});
