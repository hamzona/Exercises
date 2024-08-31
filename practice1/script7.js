// 7

numberOfPosibleRoutes = (citys) => {
  if (citys == 1) return citys;
  return citys * numberOfPosibleRoutes(citys - 1);
};

console.log(numberOfPosibleRoutes(4));
