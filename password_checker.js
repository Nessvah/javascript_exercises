// TODO: Exercise 1 - Password Checker:
// Create a function passwordChecker(password) that takes in a string as a password.
// The function should throw an error if the password is less than 8 characters long, doesn't contain at least one uppercase
// letter, at least one lowercase letter, and at least one number. If the password meets all the requirements,
// return "Valid Password".

const pwd = "1:5jAZSFZsds*~";

function passwordChecker(password) {
  // flags for the requirements
  let hasNum = false;
  let hasUpper = false;
  let hasLower = false;

  try {
    if (password.length < 8) throw Error;

    // clean password from weird characters
    // ':' was always entering uppercase and not on regex pattern
    const cleanPwd = cleanString(password);

    for (const letter of cleanPwd) {
      if (!isNaN(letter)) {
        hasNum = true;
      } else if (letter === letter.toUpperCase()) {
        hasUpper = true;
      } else {
        hasLower = true;
      }
    }

    // if all the requirements are met , it will return valid password otherwise invalid
    return hasNum && hasLower && hasUpper
      ? "Valid password."
      : "Invalid password";
  } catch (e) {
    return "Invalid password";
  }
}

function cleanString(str) {
  const punctuationLess = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return punctuationLess.replace(/\s{2,}/g, " ");
}

console.log(passwordChecker(pwd));
