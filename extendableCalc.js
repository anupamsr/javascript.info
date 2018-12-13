(function () {
  'use strict';

  function Calculator() {
    this.operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a -b,
    };

    this.calculate = function (str) {
      for (var operator in this.operators) {
        var numbers = str.split(operator);
        if (numbers.length == 2) {
          return this.operators[operator](+numbers[0], +numbers[1]);
        }
      }
    };

    this.addMethod = function (operator, func) {
      this.operators[operator] = func;
      console.log(this.operators);
    };
  }

  var calc = new Calculator();
  console.log(calc.calculate('3 + 7'));
  console.log(calc.calculate('3 - 7'));
  let powerCalc = new Calculator;
  powerCalc.addMethod('*', (a, b) => a * b);
  powerCalc.addMethod('/', (a, b) => a / b);
  powerCalc.addMethod('**', (a, b) => a ** b);

  let result = powerCalc.calculate('2 ** 3');
  console.log(result);
})();