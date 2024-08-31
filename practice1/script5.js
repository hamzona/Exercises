// 5

resistors = [12, 36, 123, 10];

sumOfResistors = (resistors) =>
  resistors.reduce((total, resistor) => total + resistor);
console.log(sumOfResistors(resistors));
