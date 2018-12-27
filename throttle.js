(function () {
  'use strict';

  function throttle(func, ms) {
    let isThrottled = false;
    let isLast = null;
    return function wrapper() {
      if (isThrottled) {
        isLast = [this, arguments];
      } else {
        setTimeout(() => {
          isThrottled = false;
          if (isLast != null) {
            let result = wrapper.apply(...isLast);
            return result;
          }
        }, ms);
        isThrottled = true;
        isLast = null;
        return func.apply(this, arguments);
      }
    };
  }

  function f(a) {
    console.log(a);
  }

  // f1000 passes calls to f at maximum once per 1000 ms
  let f1000 = throttle(f, 1000);
  f1000('a');

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function demo() {
    for (let i = 0; i < 25; ++i) {
      await sleep(100);
      f1000(i);
    }
  }
  demo();
})();