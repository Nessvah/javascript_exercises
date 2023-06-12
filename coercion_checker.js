// TODO: Exercise 5 - Type Coercion Checker:

// Create a function coerceChecker(value1, value2) that takes two arguments. If the arguments are the same
//  after coercion (i.e., ==), return "Coerced Equality". If they are the same without coercion (i.e., ===),
//   return "Strict Equality". If they are different, return "Inequality". This exercise will help you understand
//   the nuances of == vs === in JavaScript, especially when dealing with falsy values like false, null, 0, and empty strings.

function coerceChecker(val1, val2) {
  if (val1 === val2) {
    return "Strict Equality";
  } else if (Boolean(val1) == Boolean(val2)) {
    return "Coerced Equality";
  } else {
    return "Inequality";
  }
}

// we need to use the Boolean() to get the result and compare after

const result = coerceChecker(Symbol, true);
console.log(result);

/*
Boolean conversion
To explicitly convert a value to a boolean apply the Boolean() function.
Implicit conversion happens in logical context, or is triggered by logical operators ( || && !) .
*/
