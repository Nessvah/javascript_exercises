// TODO: EXERCISE 2 - Word Frequency Counter:
// Create a function wordFrequency(text) that takes in a string of
// text and returns an object where the keys are words and the values are the number of times
// each word appears in the text. Ignore case and punctuation. Use try/catch to handle any
// potential errors.

let phrase =
  "Removes everything except alphanumeric characters and whitespace, then collapses multiple adjacent whitespace to single spaces.";

function wordFrequency(text) {
  let counter = 0;
  let word = "";
  let obj = {};

  // remove punctuations from the text
  const cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  // separate each word into an array
  const strArray = cleanText.split(" ");
  console.log(strArray);

  for (let i = 0; i < strArray.length; i++) {
    word = strArray[i];
    counter++;

    console.log(word, counter);

    constructObj(word, counter);
  }
}
console.log(wordFrequency(phrase));

/**
 * @param word a word that will represent the key of the object
 * @param numOfTimes the number of times that word appears in the text
 * @return the object with the words as key and the number of times it appears as values
 */

function constructObj(nome, vezes) {
  let obj = {};
  if (nome in obj) {
    obj[nome] = vezes++;
  } else {
    obj = {
      [nome]: vezes,
    };
  }

  return obj;
}

// const obje = constructObj("hello", 1);
// console.log(obje);
