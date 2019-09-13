import { optimizeCb, isArrayLike } from '../utils';

let createReduce = function(dir) {
  let reducer = function(list, cb, memo, initial) {
    if (typeof list !== 'object' || !list) return memo;
    let keys = !isArrayLike(list) && Object.keys(list);
    let length = (keys || list).length;
    let i = 0;
    if (!initial) {
      memo = list[keys[i] || i];
      i++;
    }
    for (; i < length; i++) {
      let currentKey = keys[i] || i;
      memo = cb(memo, list[currentKey], currentKey, list);
    }
    return memo;
  };

  return function(list, iteratee, memo, context) {
    let initial = arguments.length >= 3;
    return reducer(list, optimizeCb(iteratee, context), memo, initial);
  };
};

export default createReduce(1);
