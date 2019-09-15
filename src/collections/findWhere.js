import { match } from './helper';
import find from './find';

function findWhere(list, properties) {
  if (typeof list !== 'object' && !list) return void 0;
  return find(list, function(value) {
    return match(value ,properties);
  });
}

export default findWhere;
