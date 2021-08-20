export const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;

  const suma = cart.reduce(reducer, 0);
  return suma;
};
