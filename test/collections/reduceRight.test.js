import assert from 'assert';
import reduceRight from '../../src/collections/reduceRight';

describe('reduceRight', () => {
  it('test array', () => {
    let arr = [[0, 1], [2, 3], [4, 5]];
    let result = reduceRight(
      arr,
      function(a, b) {
        return a.concat(b);
      },
      []
    );
    assert.deepEqual(result, [4, 5, 2, 3, 0, 1]);
  });

  it('test default initial value', () => {
    let arr = ['foo', 'bar', 'baz'];
    let result = reduceRight(arr, function(memo, str) {
      return memo + str;
    });
    assert.deepEqual(result, 'bazbarfoo');
  });

  it('test object', () => {
    let result = reduceRight({ a: 1, b: 2, c: 3 }, function(memo, num) {
      return memo + num;
    });
    assert.deepEqual(result, 6);
  });

  it('test null as collection with initial value', () => {
    let result = reduceRight(null, function() {}, 134);
    assert.strictEqual(result, 134);
  });

  it('test undefined', () => {
    let result = reduceRight([], function() {}, void 0);
    assert.strictEqual(result, void 0);
  });

  it('test collection length one with no initial value', () => {
    let result = reduceRight([1], function() {});
    assert.strictEqual(result, 1);
  });

  it('test empty collection', () => {
    let result = reduceRight([], function() {});
    assert.strictEqual(result, void 0);
  });
});
