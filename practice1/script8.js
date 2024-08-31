// 8

let list = [124, 324, 32, 5, 7, 32];

containSeven = (items) => {
  if (!items.find((a) => a == 7)) {
    console.log("Nema sedam");
  } else {
    console.log("Boom");
  }
};

containSeven(list);
