import assert from 'assert';
import every from '../../src/collections/every';

describe('every', () => {
  it('test number', () => {
    assert.strictEqual(
      every([0, 3, 4], function(num) {
        return num % 2 === 0;
      }),
      false
    );
    assert.strictEqual(
      every([0, 2, 4], function(num) {
        return num % 2 === 0;
      }),
      true
    );
  });
  it('test true/false', () => {
    assert.strictEqual(
      every([true, true, false], function(value) {
        return value;
      }),
      false
    );
    assert.strictEqual(
      every([true, true, true], function(value) {
        return value;
      }),
      true
    );
  });
  it('test empty set', () => {
    assert.ok(
      every([], function(value) {
        return value;
      })
    );
  });
});
