import assert from 'assert';
import reduce from '../../src/collections/reduce';

describe('reduce', () => {
  it('test array', () => {
    let arr = [1, 2, 3];
    let result = reduce(arr, (initial, num) => initial + num, 0);
    assert.strictEqual(result, 6);
  });

  it('test context', () => {
    let arr = [1, 2, 3];
    let result = reduce(
      arr,
      function(memo, num) {
        // TODO 不支持箭头函数
        return memo + num * this.multiplier;
      },
      0,
      {
        multiplier: 3
      }
    );
    assert.strictEqual(result, 18);
  });

  it('test default memo', () => {
    let arr = [1, 2, 3];
    let result = reduce(arr, function(memo, num) {
      return memo + num;
    });
    assert.strictEqual(result, 6);
  });

  it('test multiplication', () => {
    let arr = [1, 2, 3, 4];
    let result = reduce(arr, function(memo, num) {
      return memo * num;
    });
    assert.strictEqual(result, 24);
  });

  it('test null as collection with initial value', () => {
    let result = reduce(null, function() {}, 134);
    assert.strictEqual(result, 134);
  });

  it('test undefined', () => {
    let result = reduce([], function() {}, void 0);
    assert.strictEqual(result, void 0);
  });

  it('test collection length one with no initial value', () => {
    let result = reduce([1], function() {});
    assert.strictEqual(result, 1);
  });

  it('test empty collection', () => {
    let result = reduce([], function() {});
    assert.strictEqual(result, void 0);
  });
});
