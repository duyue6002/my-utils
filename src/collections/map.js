import { cb, isArrayLike } from '../utils';

function map(list, iteratee, context) {
  if (typeof list !== 'object' || !list) return [];
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  let result = Array(length);
  iteratee = cb(iteratee, context);
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    if (typeof iteratee === 'string') {
      result[i] = list[currentKey][iteratee] || list[currentKey];
    } else {
      result[i] =
        iteratee(list[currentKey], currentKey, list) || list[currentKey];
    }
  }
  return result;
}

export default map;
