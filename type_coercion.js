// TODO: Exercise 8 - Type coercion

// Write a function complexSwitch(input) that takes an argument input and returns different outcomes based
//on the value and type of input. The function should behave as follows:

// If input is exactly equal to a boolean true (strict equality), return "Boolean true".
// If input is exactly equal to a boolean false (strict equality), return "Boolean false".
// If input is loosely equal to a boolean true (loose equality, i.e., it coerces to true), but is not strictly
//a boolean, return "Coerces to true".
// If input is loosely equal to a boolean false (loose equality, i.e., it coerces to false), but is not strictly
//a boolean, return "Coerces to false".
// If input is a string that exactly equals "true" or "false", return "String true" or "String false" respectively.
// If input is not one of the above, return "Unrecognized".

function complexSwitch(arg) {
  // if we don't specify true and instead we use arg
  // if a value is false, it will not enter on the switch
  // and will go to the default
  switch (true) {
    case arg == true:
      return "Boolean true";
      break;
    case arg === false:
      return "Boolean false";
      break;
    case arg == true && typeof arg !== Boolean:
      return "Coerces to true";
      break;
    case arg == false && typeof arg !== Boolean:
      return "Coerces to false";
      break;
    case arg == "true":
      return "String true";
      break;
    case arg == "false":
      return "String false";
      break;
    case arg == null || arg == undefined || arg == Number.isNaN(arg):
      return (
        "Although " +
        arg +
        " it's a falsy value, it's not coerced to false or true."
      );
      break;
    default:
      return "Unrecognized";
  }
}

console.log(complexSwitch());

console.log(undefined == true);
