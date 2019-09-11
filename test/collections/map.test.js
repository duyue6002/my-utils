import assert from 'assert';
import map from '../../src/collections/map';

describe('map', function() {
  it('test array', function() {
    let arr = [1, 2, 3, 4];
    let result = map(arr, function(num) {
      return num * 2;
    });
    assert.deepEqual(result, [2, 4, 6, 8]);
  });

  it('test context', function() {
    let arr = [1, 2, 3, 4];
    let result = map(
      arr,
      function(num) {
        return num * this.multiplier;
      },
      { multiplier: 3 }
    );
    assert.deepEqual(result, [3, 6, 9, 12]);
    result = map(
      [1],
      function() {
        return this.length;
      },
      [5]
    );
    assert.deepEqual(result, [1]);
  });

  it('test array-like object', function() {
    let obj = { length: 2, 0: { id: '1' }, 1: { id: '2' } };
    let result = map(obj, el => el.id);
    assert.deepEqual(result, ['1', '2']);
  });

  it('test object', function() {
    let obj = { one: 1, two: 2, three: 3 };
    let result = map(obj, function(num) {
      return num * 3;
    });
    assert.deepEqual(result, [3, 6, 9]);
  });

  it('test props', function() {
    let arr = [{ name: 'timmy', age: 25 }, { name: 'ronan', age: 26 }];
    let result = map(arr, 'name');
    assert.deepEqual(result, ['timmy', 'ronan']);
  });

  it('test empty callback', function() {
    let arr = [1, 2, 3, 4];
    let result = map(arr, function() {});
    assert.deepEqual(result, [1, 2, 3, 4]);
  });

  it('test empty collections', function() {
    let result = map(null, function() {});
    assert.deepEqual(result, []);
  });
});
