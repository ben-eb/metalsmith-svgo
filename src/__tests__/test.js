import ava from 'ava';
import equal from 'assert-dir-equal';
import metalsmith from 'metalsmith';
import svgo from '..';

ava('should convert svg files', t => {
    return new Promise(resolve => {
        metalsmith('fixtures')
            .use(svgo())
            .build(err => {
                t.falsy(err, 'should not error');
                t.notThrows(() => {
                    equal('fixtures/build', 'fixtures/expected');
                });
                resolve();
            });
    });
});
