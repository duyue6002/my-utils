import { cb, isArrayLike } from '../utils';

function each(list, iteratee, context) {
  if (typeof list !== 'object' || !list) return list;
  iteratee = cb(iteratee, context);
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    iteratee(list[currentKey], currentKey, list);
  }
  return list;
}

export default each;
