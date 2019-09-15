import assert from 'assert';
import filter from '../../src/collections/filter';

describe('filter', () => {
  let evenArray = [1, 2, 3, 4, 5, 6];
  let evenObject = { one: 1, two: 2, three: 3 };
  let isEven = function(num) {
    return num % 2 === 0;
  };
  it('test array', () => {
    assert.deepEqual(filter(evenArray, isEven), [2, 4, 6]);
  });

  it('test object', () => {
    assert.deepEqual(filter(evenObject, isEven), [2]);
  });
});
