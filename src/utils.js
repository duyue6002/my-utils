function optimizeCb(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

function isArrayLike(collections) {
  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  let length = collections === null ? undefined : collections['length'];
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

export { optimizeCb, isArrayLike };
