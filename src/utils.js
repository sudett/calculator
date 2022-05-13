export const additionHandler = (n1, n2) => {
  return +n1 + +n2;
};

export const subtractionHandler = (n1, n2) => {
  return +n1 - +n2;
};

export const multiplicationHandler = (n1, n2) => {
  return +n1 * +n2;
};

export const divisionHandler = (n1, n2) => {
  return (+n1 / +n2).toFixed(2);
};
