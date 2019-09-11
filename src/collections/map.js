import { optimizeCb, isArrayLike } from '../utils';

function map(list, iteratee, context) {
  if (typeof list !== 'object' || !list) return [];
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  let result = Array(length);
  let cb =
    typeof iteratee === 'function' ? optimizeCb(iteratee, context) : iteratee;
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    if (typeof cb === 'string') {
      result[i] = list[currentKey][cb] || list[currentKey];
    } else {
      result[i] =
        cb(list[currentKey], currentKey, list) || list[currentKey];
    }
  }
  return result;
}

export default map;
