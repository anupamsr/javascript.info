(function () {
  'use strict';

  function work(a, b) {
    console.log(a + b);
  }

  function spy(func) {
    // function result (...args) {
    //   result.calls.push(args);
    //   return func.apply(this, arguments);

    function result() {
      result.calls.push([...arguments]);
      return func.call(this, ...arguments);
    }

    result.calls = [];

    return result;
  }

  work = spy(work);

  work(1, 2);
  work(4, 5);

  for (let args of work.calls) {
    console.log('call: ' + args.join());
  }
})();