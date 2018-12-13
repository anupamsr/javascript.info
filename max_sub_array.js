(function () {
  'use strict';

  var getMaxSubSum = (arr) => {
    if (arr.length == 0) {
      return;
    }

    var start, end;
    var max, sum;
    start = end = 0;
    max = sum = arr[0];
    for (var i = 1; i < arr.length; ++i) {
      if (sum < 0) {
        sum = arr[i];
        start = i;
      } else {
        sum += arr[i];
        if (sum > max) {
          max = sum;
          end = i;
        }
      }
    }

    console.log('Between ' + start + ' and ' + end);
    return max;
  };

  console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));
  console.log(getMaxSubSum([-1, 2, 3, -9]));
  console.log(getMaxSubSum([2, -1, 2, 3, -9]));
  console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
  console.log(getMaxSubSum([-2, -1, 1, 2]));
  console.log(getMaxSubSum([100, -9, 2, -3, 5]));
  console.log(getMaxSubSum([1, 2, 3]));
  console.log(getMaxSubSum([-1, -2, -3]));
  console.log(getMaxSubSum([1, 1, 1]));
})();