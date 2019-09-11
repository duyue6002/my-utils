import assert from 'assert';
import each from '../../src/collections/each';

describe('each', function() {
  it('test array', function() {
    each([1, 2, 3, 4], function(el, i) {
      assert.strictEqual(el, i + 1);
    });

    let result = [];
    each([1, 2, 3, 4], function(el) {
      result.push(el);
    });
    assert.deepEqual(result, [1, 2, 3, 4]);

    result = [];
    each(
      [1, 2, 3, 4],
      function(el) {
        result.push(el * this.multiplier);
      },
      { multiplier: 5 }
    );
    assert.deepEqual(result, [5, 10, 15, 20], 'context works');
  });

  it('test object', function() {
    let result = [];
    let obj = { one: 1, two: 2, three: 3 };
    obj.constructor.prototype.four = 4;
    each(obj, function(value, key) {
      result.push(key);
    });
    assert.deepEqual(
      result,
      ['one', 'two', 'three'],
      '能迭代对象本身属性，忽略对象原型上的属性'
    );
  });

  it('test array-like object', function() {
    let result = [];
    let obj = { 1: 'one', 2: 'two', 3: 'three' };
    each(obj, function(el) {
      result.push(el);
    });
    assert.strictEqual(result, ['one', 'two', 'three']);
  });

  it('test null', function() {
    let count = 0;
    each(null, function() {
      ++count;
    });
    assert.strictEqual(count, 0, '处理 null');
  });

  it('test false', function() {
    let count = 0;
    each(false, function() {
      ++count;
    });
    assert.strictEqual(count, 0, '处理 false');
  });

  it('test empty cb', function() {
    let a = [1, 2, 3];
    assert.strictEqual(each(a, function() {}), a);
    assert.strictEqual(each(null, function() {}), null);
  });
});
