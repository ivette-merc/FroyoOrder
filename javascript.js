const userInputString = prompt(
  "Enter froyo flavors! Please separate them by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const stringArray = userInputString.split(",");

// const numbers = [];
// for (let i = 0; i < stringArray.length; i++) {
//   const str = stringArray[i];
//   const number = parseInt(str);
//   numbers.push(number);
// }

console.table()