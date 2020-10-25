function required(value) {
  if (value) {
    return undefined;
  }

  return 'Obrigatório';
}

export default {
  required,
};
