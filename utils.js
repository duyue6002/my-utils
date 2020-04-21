(function () {
  // TODO - all custom functions
  function debounce(func, wait, immediate) {
    let timer = null;
    return function (...args) {
      if (!timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, 1000);
    };
  }

  // ANCHOR - setup
  // -------------
  function _(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  }
  function mixin(obj) {
    Object.keys(obj).forEach((name) => {
      const func = (_[name] = obj[name]);
      _.prototype[name] = func;
    });
    return _;
  }
  var root =
    (typeof self == 'object' && self.self === self && self) ||
    (typeof global == 'object' && global.global === global && global) ||
    this;
  var allExports = { debounce };
  var _$1 = mixin(allExports);
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _$1;
    }
    exports._ = _$1;
  } else {
    root._ = _$1;
  }
})();
