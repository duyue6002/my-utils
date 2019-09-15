import { isArrayLike } from '../utils';
import { match } from './helper';

function findWhere(list, properties) {
  if (typeof list !== 'object' && !list) return void 0;
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    if (match(list[currentKey], properties)) return list[currentKey];
  }
  return void 0;
}

export default findWhere;
