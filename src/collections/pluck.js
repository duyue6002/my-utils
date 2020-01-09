import { isArrayLike } from '../utils';

function pluck(list, propertyName) {
  if (typeof list !== 'object' || !list) return [];
  let keys = !isArrayLike(list) && Object.keys(list);
  let length = (keys || list).length;
  let result = Array(length);
  propertyName =
    typeof propertyName === 'string'
      ? propertyName
      : Object.prototype.toString(propertyName);
  for (let i = 0; i < length; i++) {
    let currentKey = keys[i] || i;
    if (list[currentKey].hasOwnProperty(propertyName)) {
      result[i] = list[currentKey][propertyName];
    } else {
      result[i] = void 0;
    }
  }
  return result;
}

export default pluck;
