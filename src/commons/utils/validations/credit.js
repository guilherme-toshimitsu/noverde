const MAX_VALUE = 4000;
const MIN_VALUE = 500;

const validCredit = (value) => {
  if (!value) {
    return 'Valor invalido';
  }
  if (value > MAX_VALUE) {
    return 'Valor Maximo de R$4000';
  }
  if (value < MIN_VALUE) {
    return 'Valor Minimo de R$500';
  }
  return undefined;
};
export { validCredit };
