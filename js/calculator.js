/*
let addSymbol = (element) => {
  document.getElementById("screen").value += element;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let operation = document.getElementById("screen").value;

  console.log(operation);

  let components = operation.split(/(\*|\+|\-|\/)/g);
  console.log(components);

  let result = parseInt(components[0]);
  for (let i = 1; i < components.length; i += 2) {
    let operator = components[i];
    let operand = parseInt(components[i + 1]);
    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
        break;
      default:
        console.log("Err");
    }
  }
  console.log(result);
  document.getElementById("screen").value = Math.floor(result);
};
*/
/*
    NO SE PUEDE OPERAR CON DECIMALES

    Operaciones que NO se van a poder hacer

    3+5+6
    /9*3
    *3*3
    4-/3
    7 * / *6
    -*5
    +3
    -8

    >>>> "E"

*/
// let addSymbol = (element) => {
//   document.getElementById("screen").value += element;
// };

// let clearScreen = () => {
//   document.getElementById("screen").value = "";
// };

// let calculate = () => {
//   let operation = document.getElementById("screen").value;

//   console.log(operation);

//   let res = "E";

//   console.log("Antes");
//   try {
//     res = eval(operation);
//   } catch (e) {
//     console.log(e);
//     res = "E";
//   }
//   console.log("Despues");

//   document.getElementById("screen").value = res;
// };

// Todo E:
// let addSymbol = (element) => {
//   document.getElementById("screen").value += element;
// };

// let clearScreen = () => {
//   document.getElementById("screen").value = "";
// };

// let calculate = () => {
//   let operation = document.getElementById("screen").value;

//   console.log(operation);

//   let res = "E";

//   //....

//   document.getElementById("screen").value = res;
// };

let addSymbol = (element) => {
  document.getElementById("screen").value += element;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let operation = document.getElementById("screen").value;

  console.log(operation);

  let res = "Error";

  console.log("Antes");
  try {
    res = eval(operation);
  } catch (e) {
    console.log(e);
    res = "Error";
  }
  console.log("Despues");

  document.getElementById("screen").value = res;
};

/*
  Lista de operaciones correctas:
  6+6 -> 12
  -6+6 -> 0
  +6-6 -> 0
  -9*-3 -> 27
  735*-9 -> un montón

  -6/-1 -> 6  ->   -6  |  /   |  -1  
  +3*-14 -> 

*/

/*
  NO SE PUEDE OPERAR CON DECIMALES

  Operaciones que NO se van a pdoer hacer

  3+5+6
  /9*3
  *3*3
  4-/3
  7 * / *6
  -*5
  +3
  -8

  >>>> "E"

*/
