function optimizeCb(func, context = null) {
  return function(...args) {
    return func.apply(context, args);
  };
}

function isArrayLike(collections) {
  const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  let length = collections === null ? undefined : collections[length];
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

export { optimizeCb, isArrayLike };
