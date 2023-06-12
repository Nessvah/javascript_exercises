var a = "global-a";
let b = "global-b";
const c = "global-c";

function outerFunction() {
  var a = "outer-a";
  let b = "outer-b";

  //   console.log(a); // ? outer-a - correct
  //   console.log(b); // ? outer-b - correct
  //   console.log(c); // ? global-c - correct

  //   if (true) {
  //     var a = "outer-if-a";
  //     let b = "outer-if-b";
  //     const c = "outer-if-c";

  //     console.log(a); // ? outer-if-a -correct
  //     console.log(b); // ? outer-if-b -correct
  //     console.log(c); // ? outer-if-c -correct

  //     function innerFunction() {
  //       var a = "inner-a";
  //       let b = "inner-b";
  //       const c = "inner-c";

  //       console.log(a); // ? inner-a - correct
  //       console.log(b); // ? inner-b -correct
  //       console.log(c); // ? inner -c -correct
  //     }

  //     innerFunction();
  //   }

  console.log(a); // ? outer-if-a (its function scoped but not block scope)
  console.log(b); // ? outer-b (because its block scoped so the b from if will not be accessible)
  console.log(c); // ? global-c theres not c defined inside the function
}

outerFunction();
console.log(a); // ? global-a (because var is function scoped so its not accessible from the outside)
console.log(b); // ? global-b - correct
console.log(c); // ? global-c - correct
