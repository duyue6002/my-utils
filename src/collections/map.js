import { optimizeCb, isArrayLike } from '../utils';

function map(list, iteratee, context) {
  let cb =
    typeof iteratee === 'function' ? optimizeCb(iteratee, context) : iteratee;
  let result = [];
  if (typeof list !== 'object' || !list) return result;
  if (isArrayLike(list)) {
    for (let i = 0, length = list.length; i < length; i++) {
      if (typeof cb === 'string') {
        result[i] = list[i][cb] || list[i];
      } else {
        result[i] = cb(list[i], i, list) || list[i];
      }
    }
  } else {
    for (let [key, value] of Object.entries(list)) {
      result.push(cb(value, key, list) || value);
    }
  }
  return result;
}

export default map;
