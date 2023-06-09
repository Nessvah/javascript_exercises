/** TODO: Exercise 0 - Given an array of integers, write a program to calculate the sum of all the numbers
 *in the array. The program should also calculate the average of the numbers in the array and find the largest number."
 *
 *Let's assume we have the array numbers = [10, 20, 30, 40, 50, 60];
 *
 *Implement this exercise with For, While, Do-while and For...of loops.
 *You can also try to implement with array built-in functions as reduce and forEach.
 *Check also the Math.max method to find the biggest number in an array.
 */

// FOR LOOP

const numbers = [10, 20, 30, 40, 50, 3.3];

// function calculateSumOfAllNums(arr) {
//   let first,
//     sum = 0;
//   // assume that the first one is the largest number
//   let largest = arr[0];

//   let arrSize = arr.length;

//   for (let i = 0; i < arrSize; i++) {
//     // don't let it go out of bounds
//     if (i == arrSize - 1) {
//       sum += arr[i];
//       if (arr[i] > largest) {
//         largest = arr[i];
//       } else {
//         // if its not the largest we can break
//         // since we reach the end
//         break;
//       }
//     }

//     first = arr[i];
//     sum += first;

//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   const avg = calculateAvg(sum, arrSize);

//   return `Using for loop:\n\nThe sum of the nums is: ${sum}.\nThe average is: ${avg} \nThe largest number is: ${largest}`;
// }

// WHILE LOOP

// function calculateSumOfAllNums(arr) {
//   let first,
//     sum = 0;
//   // assume that the first one is the largest number
//   let largest = arr[0];

//   let arrSize = arr.length;
//   let i = 0;

//   while (i < arrSize) {
//     // don't let it go out of bounds
//     if (i == arrSize - 1) {
//       sum += arr[i];
//       if (arr[i] > largest) {
//         largest = arr[i];
//       } else {
//         // if its not the largest we can break
//         // since we reach the end
//         break;
//       }
//     }

//     first = arr[i];
//     sum += first;

//     if (arr[i] > largest) {
//       largest = arr[i];
//     }

//     i++;
//   }

//   const avg = calculateAvg(sum, arrSize);

//   return `Using while loop:\n\nThe sum of the nums is: ${sum}.\nThe average is: ${avg} \nThe largest number is: ${largest}`;
// }

// DO ... WHILE LOOP

// function calculateSumOfAllNums(arr) {
//   let first,
//     sum = 0;
//   // assume that the first one is the largest number
//   let largest = arr[0];

//   let arrSize = arr.length;
//   let i = 0;

//   do {
//     // don't let it go out of bounds

//     if (i == arrSize - 1) {
//       sum += arr[i];
//       if (arr[i] > largest) {
//         largest = arr[i];
//       } else {
//         // if its not the largest we can break
//         // since we reach the end
//         break;
//       }
//     }

//     first = arr[i];
//     sum += first;

//     if (arr[i] > largest) {
//       largest = arr[i];
//     }

//     i++;
//   } while (i < arrSize);

//   const avg = calculateAvg(sum, arrSize);

//   return `Using: do... while loop:\n\nThe sum of the nums is: ${sum}.\nThe average is: ${avg} \nThe largest number is: ${largest}`;
// }

// FOR ... OF LOOP

// function calculateSumOfAllNums(arr) {
//   let arrSize = arr.length;
//   let sum = 0;
//   // assume that the first one is the largest number
//   let largest = arr[0];

//   for (let num of numbers) {
//     sum += num;

//     if (num > largest) {
//       largest = num;
//     }
//   }

//   const avg = calculateAvg(sum, arrSize);

//   return `Using For ... Of Loop:\n\nThe sum of the nums is: ${sum}.\nThe average is: ${avg} \nThe largest number is: ${largest}`;
// }

// Using the reduce method!

function calculateSumOfAllNums(arr) {
  let sum = arr.reduce((acc, currentValue) => acc + currentValue);
  // to find the largest we use the math.max and we specify the first element of the array at the end
  let largest = arr.reduce(
    (acc, currentValue) => Math.max(acc, currentValue),
    arr[0]
  );
  const avg = calculateAvg(sum, arr.length);

  return `Using Reduce Method:\n\nThe sum of the nums is: ${sum}.\nThe average is: ${avg} \nThe largest number is: ${largest}`;
}

const result = calculateSumOfAllNums(numbers);
console.log(result);

//function to calculate the avg of the numbers in the array

function calculateAvg(num, size) {
  const result = num / size;
  const final = parseFloat(result).toFixed(2);
  return final;
}
