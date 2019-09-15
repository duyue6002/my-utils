import assert from 'assert';
import where from '../../src/collections/where';

describe('where', () => {
  let list = [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }];
  it('test array', () => {
    assert.deepEqual(where(list, { a: 1 }), [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 1, b: 4 },
    ]);
    assert.deepEqual(where(list, { b: 2 }), [{ a: 1, b: 2 }, { a: 2, b: 2 }]);
    assert.deepEqual(where(list, {}), list);
  });

  it('test function as properties', () => {
    function test() {}
    test.a = 1;
    assert.deepEqual(where(list, test), [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 1, b: 4 },
    ]);
  });
});
