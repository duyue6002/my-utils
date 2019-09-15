import filter from './filter';
import { match } from './helper';

function where(list, properties) {
  if (typeof list !== 'object' && !list) return void 0;
  return filter(list, function(value) {
    return match(value, properties);
  });
}

export default where;
