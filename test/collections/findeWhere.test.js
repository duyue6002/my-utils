import assert from 'assert';
import findWhere from '../../src/collections/findWhere';

describe('findWhere', () => {
  let list = [
    { a: 1, b: 2 },
    { a: 2, b: 2 },
    { a: 1, b: 3 },
    { a: 1, b: 4 },
    { a: 2, b: 4 },
  ];
  it('test array', () => {
    assert.deepEqual(findWhere(list, { a: 2 }), { a: 2, b: 2 });
    assert.deepEqual(findWhere(list, { b: 2 }), { a: 1, b: 2 });
    assert.deepEqual(findWhere(list, { c: 2 }), void 0);
    assert.deepEqual(findWhere([], { c: 2 }), void 0);
  });

  it('test function as property', () => {
    function test() {}
    test.a = 2;
    assert.deepEqual(findWhere(list, test), { a: 2, b: 2 });
  });

  it('test class as property', () => {
    function TestClass() {
      this.y = 5;
      this.x = 'foo';
    }
    var expect = { c: 1, x: 'foo', y: 5 };
    assert.deepEqual(findWhere([{ y: 5, b: 6 }, expect], new TestClass()), expect);
  });
});
