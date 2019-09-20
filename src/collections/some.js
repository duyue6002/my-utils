import { cb, isArrayLike } from '../utils';

function some(list, predicate, context) {
  predicate = cb(predicate, context);
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    if (predicate(list[currentKey], currentKey, list)) return true;
  }
  return false;
}

export default some;
