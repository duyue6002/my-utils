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
  let timerId = null,
    result = void 0;
  function later(context, args) {
    timerId = null;
    if (!immediate) result = func.apply(context, args);
  }
  const debounced = function (...args) {
    // 只记录在 wait 期间频繁操作的最后一个 timer
    if (timerId) clearTimeout(timerId);
    if (immediate) {
      // 确认是首次触发，首次触发后 timer 会赋值，防止一直执行该函数
      const callNow = !timerId;
      // 设置定时器，later 里有另外判断，不会执行此次 timer
      timerId = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      // 设置定时器，会稍后执行 later
      timerId = setTimeout(later, wait);
    }
    return result;
  };
  debounced.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  };
  return debounced;
}
