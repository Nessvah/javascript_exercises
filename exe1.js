// devolver um array com valores separados
// por vírgula até ao limite definido

const LIMIT = 50;
let str = "";

for (let i = 2; i <= LIMIT; i++) {
  if (i == LIMIT) {
    str += i + "\nThe end!";
    break;
  }
  str += i + ",";
}

console.log(str);
