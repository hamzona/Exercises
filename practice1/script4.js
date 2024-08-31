// 4
const items = [
  { name: "Lopta", color: "red" },
  { name: "Stol", color: "blue" },
  { name: "Daska", color: "blue" },
  { name: "Pernica", color: "white" },
];

filterBlueObjects = (items) => items.filter((a, b) => a.color == "blue");
console.log(filterBlueObjects(items));
