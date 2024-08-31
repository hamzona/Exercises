//3

numbers = [21, 23, 43, 11, 2, 455];
findBiggestNumber = (cart) => cart.sort((a, b) => b - a)[0];
console.log(findBiggestNumber(numbers));
