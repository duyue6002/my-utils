/**
 * every_.every(list, [predicate], [context]) Alias: all
Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found. predicate is transformed through iteratee to facilitate shorthand syntaxes.

_.every([2, 4, 5], function(num) { return num % 2 == 0; });
=> false
 */
import { cb, isArrayLike } from '../utils';
// import each from './each';

function every(list, predicate, context) {
  predicate = cb(predicate, context);
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    if (!predicate(list[currentKey], currentKey, list)) return false;
  }
  return true;
}

export default every;
