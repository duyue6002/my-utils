import { optimizeCb, isArrayLike } from '../utils';

function each(list, iteratee, context) {
  let cb = optimizeCb(iteratee, context);
  if (typeof list !== 'object' || !list) return list;
  if (isArrayLike(list)) {
    for (let index = 0, length = list.length; index < length; index++) {
      cb(list[index], index, list);
    }
  } else {
    // TODO
    for (let [key, value] of Object.entries(list)) {
      cb(value, key, list);
    }
  }
  return list;
}

export default each;
