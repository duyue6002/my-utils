function optimizeCb(func, context) {
  if (context === void 0) return func;
  // TODO 为什么需要 switch
  // switch (argCount === null ? 3 : argCount) {
  //   case 3:
  //     return function(value, index, collection) {
  //       return func.call(context, value, index, collection);
  //     };
  //   case 4:
  //     return function(accumulator, value, index, collection) {
  //       return func.call(context, accumulator, value, index, collection);
  //     };
  //   default:
  //     break;
  // }
  return function() {
    return func.apply(context, arguments);
  };
}

function isArrayLike(collection) {
  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  let length = collection === null ? undefined : collection['length'];
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

function cb(value, context) {
  if (typeof value === 'function') return optimizeCb(value, context);
  if (value && typeof value === 'object' && !Array.isArray(value)) return value;
  if (typeof value === 'string') return value;
}

export { optimizeCb, isArrayLike, cb };
