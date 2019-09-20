import assert from 'assert';
import some from '../../src/collections/some';

describe('some', () => {
  it('test sample', () => {
    assert.ok(some([null, 0, 'yes', false]));
  });
  it('test number', () => {
    assert.strictEqual(
      some([0, 3, 4], function(num) {
        return num % 2 !== 0;
      }),
      true
    );
    assert.strictEqual(
      some([0, 2, 4], function(num) {
        return num % 2 === 0;
      }),
      true
    );
  });
  it('test true/false', () => {
    assert.ok(
      some([true, true, false], function(value) {
        return value;
      })
    );
    assert.ok(
      !some([false, false, false], function(value) {
        return value;
      })
    );
  });
  it('test empty set', () => {
    assert.ok(
      !some([], function(value) {
        return value;
      })
    );
  });
});
