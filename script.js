// Task 1
const equalFunction = (a, b) => {
  if (a == b) {
    return "ტოლია";
  } else return "არ არის ტოლი";
};

// Task 2
const convertFahrenheitToCelsius = (fahrenheit) => {
  if (typeof fahrenheit === "number") {
    return `${((32 - fahrenheit) * 5) / 9} °C`;
  } else return false;
};

// Task 3
const microCalculator = (a, b, operation) => {
  if (typeof a === "number" && typeof b === "number") {
    if (operation === "+") {
      return a + b;
    } else if (operation === "-") {
      return a - b;
    } else if (operation === "*") {
      return a * b;
    } else if (operation === "/") {
      return a / b;
    } else {
      return false;
    }
  } else return false;
};
