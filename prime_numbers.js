const LIMIT = 50;

// for (let num = 15; num < LIMIT; num++) {
//   let isPrime = true;

//   // divisor * divisor <= num because this divisison needs to be lower than that
//   // 909*909
//   for (let divisor = 2; divisor * divisor <= num; divisor++) {
//     if (num % divisor === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(num);
//   }
// }

let number = 2;

do {
  let divisor = 2;
  let isPrime = true;

  do {
    if (number % divisor === 0 && divisor !== number) {
      isPrime = false;
      break;
    }
    divisor++;
  } while (divisor <= number);

  if (isPrime) {
    console.log(number);
  }
  number++;
} while (number <= LIMIT);
