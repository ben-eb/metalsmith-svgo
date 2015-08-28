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
        return Promise.all(Object.keys(files).map(function (file) {
            if (extname(file) !== '.svg') {
                return true;
            }
            return minifyPromise(svgo, files[file]);
        })).then(function () { done(); });
    }
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
