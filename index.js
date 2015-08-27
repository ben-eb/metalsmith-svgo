'use strict';

var SVGO    = require('svgo'),
    extname = require('path').extname;

function minifyPromise (svgo, file) {
    return new Promise(function (resolve, reject) {
        return svgo.optimize(String(file.contents), function (res) {
            file.contents = new Buffer(res.data);
            resolve();
        });
    });
};

function plugin (opts) {
    var svgo = new SVGO(opts);
    return function (files, metalsmith, done) {
        var promises = [];
        Object.keys(files).forEach(function (file) {
            if (extname(file) !== '.svg') {
                return;
            }
            promises.push(minifyPromise(svgo, files[file]));
        });
        Promise.all(promises).then(function () { done(); });
    }
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
