(function () {
  'use strict';

  // // Iterator function
  // function nameIterator(names) {
  //   let nextIndex = 0;

  //   return {
  //     next: function () {
  //       return nextIndex < names.length ? {
  //         value: names[nextIndex++],
  //         done: false
  //       } : {
  //         done: true
  //       };
  //     }
  //   };
  // }

  // const namesArr = ['anda', 'banda', 'danda'];
  // const names = nameIterator(namesArr);
  // console.log(names.next().value);
  // console.log(names.next().value);
  // console.log(names.next().value);
  // console.log(names.next().value);
  
  // Generator function
  function* sayNames() {
    yield 'anda';
    yield 'banda';
    yield 'danda';
  }

  const name = sayNames();

  console.log(name.next().value);
  console.log(name.next().value);
  console.log(name.next().value);
  console.log(name.next().value);
  
  // ID creator
  function* createIds() {
    let index = 0;

    while (true) {
      yield index++;
    }
  }

  const gen = createIds();
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  
})();