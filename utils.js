// ANCHOR - setup
// -------------
(function (allExports) {
  function _(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  }
  function mixin(obj) {
    Object.keys(obj).forEach((name) => {
      _[name] = obj[name];
    });
    return _;
  }
  var root =
    (typeof self == 'object' && self.self === self && self) ||
    (typeof global == 'object' && global.global === global && global) ||
    this;
  var _$1 = mixin(allExports);
  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _$1;
    }
    exports._ = _$1;
  } else {
    root._ = _$1;
  }
})({ debounce });

// TODO - all custom functions
function debounce(func, wait, immediate) {
  // let timer = null;
  // return function (...args) {
  //   if (!timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     func.apply(this, args);
  //     timer = null;
  //   }, 1000);
  // };
  return true;
}
