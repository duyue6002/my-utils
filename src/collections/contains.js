import { isArrayLike } from '../utils';

function contains(list, value, fromIndex) {
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  if (typeof fromIndex !== 'number') {
    fromIndex = 0;
  } else {
    fromIndex = fromIndex >= 0 ? fromIndex : length + fromIndex;
  }
  for (let i = fromIndex; i < length; i++) {
    let currentKey = keys[i] || i;
    if (value === list[currentKey]) return true;
  }
  return false;
}

export default contains;
