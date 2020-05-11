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
})({ flatten });

// TODO - all custom functions
/**
 * @param {Function} func 需要节流的回调函数
 * @param {number} [wait=0]
 * @param {Object} [options={}]
 * @param {boolean} [options.leading=true] 事件响应时执行/不执行回调
 * @param {boolean} [options.trailing=true] 事件结束后执行/不执行回调
 * @returns {Function} 有节流功能的函数
 */
function throttle(func, wait, options) {
  let timerId = null,
    result = void 0,
    previous = 0;
  if (!options) options = {};
  function later(context, args) {
    previous = options.leading === false ? 0 : Date.now();
    timerId = null;
    result = func.apply(context, args);
  }
  const throttled = function (...args) {
    let now = Date.now();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    // 时间戳处理 options.leading = true，留头
    if (remaining <= 0) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      previous = now;
      result = func.apply(this, args);
    }
    // 定时器处理 options.trailing = true，留尾
    else if (!timerId && options.trailing !== false) {
      timerId = setTimeout(later, remaining);
    }
    return result;
  };
  throttled.cancel = function () {
    clearTimeout(timerId);
    timerId = null;
  };
  return throttled;
}

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

function flatten(input, shallow, output) {
  output = output || [];
  if (shallow) {
    output = input.reduce((acc, cur) => acc.concat(cur), output);
  } else {
    output = input.reduce(
      (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),
      output
    );
  }
  return output;
}
