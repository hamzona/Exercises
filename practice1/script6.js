// 6

const drinks = [
  { name: "Mojito", price: 20 },
  { name: "Coke", price: 2 },
  { name: "Hot Chocolate", price: 5 },
  { name: "Wine", price: 150 },
];

drinksSorted = (items) => items.sort((a, b) => a.price - b.price);
console.log(drinksSorted(drinks));
