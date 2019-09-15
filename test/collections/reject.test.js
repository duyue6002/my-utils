import assert from 'assert';
import reject from '../../src/collections/reject';

describe('reject', () => {
  let evenArray = [1, 2, 3, 4, 5, 6];
  let evenObject = { one: 1, two: 2, three: 3 };
  let isEven = function(num) {
    return num % 2 === 0;
  };
  it('test array', () => {
    assert.deepEqual(reject(evenArray, isEven), [1, 3, 5]);
  });

  it('test object', () => {
    assert.deepEqual(reject(evenObject, isEven), [1, 3]);
  });
});
