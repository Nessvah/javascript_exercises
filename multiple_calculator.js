// TODO: Multiple calculator

/*
 Create a function calculate(operation, ...numbers) that accepts an operation
 (as a string) and an unknown number of numbers. The function should return the
 result of the operation. The operations are 'add', 'subtract', 'multiply', and
 'divide'. You should use a switch statement to handle the operation. If the
 operation is not one of the specified strings, throw an error. Remember that division
 by zero should also throw an error. Be careful with hoisting when declaring your variables.
*/

function calculate(operator, ...nums) {
  try {
    try {
      // throw error if trying to divide by zero
      for (let i = 0; i < arguments.length; i++) {
        if (operator === "/" && arguments[i] == 0) {
          throw Error;
        }
      }
    } catch (e) {
      console.log("Zero division not permitted.");
      return 0;
    }

    switch (operator) {
      case "+":
        return nums.reduce((acc, currentValue) => acc + currentValue);
        break;
      case "-":
        return nums.reduce((acc, currentValue) => acc - currentValue);
        break;
      case "/":
        return nums.reduce((acc, currentValue) => acc / currentValue);
        break;
      case "*":
        return nums.reduce((acc, currentValue) => acc * currentValue);
        break;
      case "^":
        return nums.reduce((acc, currentValue) => acc ** currentValue);
        break;
      default:
        throw Error;
    }
  } catch (e) {
    console.log("Erro na operação.");
  }
}

const result = calculate("/", 0, 5);

// se não for undefined imprime resultado
if (result) {
  console.log(result);
}

// error:   [Function: Error] { stackTraceLimit: 10 } ????
