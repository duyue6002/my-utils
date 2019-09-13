import { optimizeCb, isArrayLike } from '../utils';

let createReduce = function(dir) {
  let reducer = function(list, cb, memo, initial) {
    if (typeof list !== 'object' || !list) return memo;
    let keys = !isArrayLike(list) && Object.keys(list);
    let length = (keys || list).length;
    let i = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = list[keys[i] || i];
      i += dir;
    }
    for (; i >= 0 && i < length; i += dir) {
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

export { createReduce };
