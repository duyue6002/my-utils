import assert from 'assert';
import find from '../../src/collections/find';

describe('find', () => {
  it('test array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let result = find(arr, function(num) {
      return num > 2;
    });
    assert.strictEqual(result, 3);
  });

  it('test not found', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let result = find(arr, function(num) {
      return num > 8;
    });
    assert.strictEqual(result, void 0);
  });

  it('test array-likes', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arr.dotmatch = 8;
    let result = find(arr, function(num) {
      return num === 8;
    });
    assert.strictEqual(result, void 0);
  });

});
