import assert from 'assert';
import contains from '../../src/collections/contains';

describe('contains', () => {
  it('test number', () => {
    assert.ok(contains([1, 2, 3], 3));
    assert.ok(!contains([1, 2, 3], 4));
    assert.ok(contains([1, 2, 3, 4, 5], 5, true));
  });
  it('test object', () => {
    assert.ok(contains({ moe: 1, larry: 3, curly: 6 }, 3));
  });
  it('test fromIndex', () => {
    let numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    assert.ok(contains(numbers, 1, 1));
    assert.ok(!contains(numbers, 1, -1));
    assert.ok(!contains(numbers, 1, -2));
    assert.ok(contains(numbers, 1, -3));
    assert.ok(contains(numbers, 1, 6));
    assert.ok(!contains(numbers, 1, 7));
  });
});
