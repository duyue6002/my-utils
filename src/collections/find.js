import { optimizeCb, isArrayLike } from '../utils';

function find(list, predicate, context) {
  // TODO predicate 为对象时的情况
  predicate = optimizeCb(predicate, context);
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    let result = cb(list[currentKey]);
    if (!!result) return list[currentKey];
  }
  return void 0;
}

export default find;
