(function () {
  'use strict';

  function showCircle(cx, cy, radius) {
    return new Promise(function (resolve, reject) {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '.circle { \
      transition-property: width, height, margin-left, margin-top; \
      transition-duration: 2s; \
      position: fixed; \
      transform: translateX(-50%) translateY(-50%); \
      background-color: red; \
      border-radius: 50%; \
    }';
      document.getElementsByTagName('head')[0].appendChild(style);

      let div = document.createElement('div');
      div.style.width = 10 + 'px';
      div.style.height = 10 + 'px';
      div.style.left = cx + 'px';
      div.style.top = cy + 'px';
      div.className = 'circle';
      document.body.append(div);
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    });
  }

  // Call showCircle after DOM is loaded
  document.addEventListener('DOMContentLoaded', function (event) {
    let promise = showCircle(150, 150, 100);

    promise.then(
      div => {
        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.message-ball { \
          font-size: 20px; \
          line-height: 200px; \
          text-align: center; \
        }';
        document.getElementsByTagName('head')[0].appendChild(style);

        div.classList.add('message-ball');
        div.append('Hello, world!');
      }, // shows hello world message after transition end of circle
      error => console.log(error) // doesn't run
    );
  });

})();