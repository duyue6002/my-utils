import { optimizeCb, isArrayLike } from '../utils';

function reduce(list, iteratee, memo, context) {
  if (typeof list !== 'object' || !list) return memo;
  let cb = optimizeCb(iteratee, context);
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  let [result, i] = memo !== undefined ? [memo, 0] : [list[0], 1];
  for (; i < length; i++) {
    let currentKey = keys[i] || i;
    result = cb(result, list[currentKey], currentKey, list);
  }
  return result;
}

export default reduce;
