// 2

const cart = [
  { title: "Book", quantity: 3, price: 20 },
  { title: "TV", quantity: 1, price: 820 },
  { title: "Bread", quantity: 1, price: 2 },
  { title: "T-Shirt", quantity: 5, price: 10 },
  { title: "Socks", quantity: 7, price: 4 },
];

getQuantityOfCartItems = (items) =>
  items.reduce((total, i) => {
    return { quantity: total.quantity + i.quantity };
  }).quantity;
console.log(getQuantityOfCartItems(cart));
