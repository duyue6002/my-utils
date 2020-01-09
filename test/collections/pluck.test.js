import assert from 'assert';
import pluck from '../../src/collections/pluck';

describe('pluck', function() {
  it('test array', function() {
    let arr = [
      { name: 'moe', age: 40 },
      { name: 'larry', age: 50 },
      { name: 'curly', age: 60 },
    ];
    assert.deepEqual(pluck(arr, 'name'), ['moe', 'larry', 'curly']);
  });

  it('missing property', function() {
    let arr = [
      { name: 'moe', age: 40 },
      { name: 'larry', age: 50 },
      { name: 'curly', age: 60 },
    ];
    assert.deepEqual(pluck(arr, 'address'), [void 0, void 0, void 0]);
  });

  it('not string property name', function() {
    let arr = [{ '[object Object]': 1 }];
    assert.deepEqual(pluck(arr, {}), [1]);
  });
});
