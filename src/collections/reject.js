import { cb } from '../utils';
import each from './each';

function reject(list, iteratee, context) {
  if (typeof list !== 'object' || !list) return void 0;
  iteratee = cb(iteratee, context);
  let result = [];
  each(list, function(value, index, list) {
    if (!iteratee(value, index, list)) {
      result.push(value);
    }
  });
  return result;
}

export default reject;
