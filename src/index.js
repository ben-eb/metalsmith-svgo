import SVGO from 'svgo';
import {extname} from 'path';

function minifyPromise (svgo, file) {
    return new Promise(resolve => {
        return svgo.optimize(String(file.contents), res => {
            file.contents = new Buffer(res.data);
            resolve();
        });
    });
};

export default function metalsmithSvgo (opts) {
    const svgo = new SVGO(opts);
    return function (files, metalsmith, done) {
        return Promise.all(Object.keys(files).map(file => {
            if (extname(file) !== '.svg') {
                return true;
            }
            return minifyPromise(svgo, files[file]);
        })).then(() => {
            done();
        });
    };
}
