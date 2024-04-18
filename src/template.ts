// TODO: klopt deze functienaam wel?
// TODO: wat is x?
// TODO: misschien kun je de 'magic numbers' verbeteren?
export function isWithdrawAmountTenOrMore(x: number) {
  return x >= 10 && x <= 1500;
}

// TODO: ik vind de functienaam niet heel scherp. Aangezien we 'm toch niet gaan draaien in Codewars kun je 'm misschien een betere naam geven.
export function solve(x: number): number {
  if (!isWithdrawAmountTenOrMore(x)) {
    return -1;
  }

  const bankNotesList = [500, 200, 100, 50, 20, 10];
  let remainingAmount = x;
  let numberOfBanknotes = 0;

  // TODO: waarom disable je de linter?
  // eslint-disable-next-line no-restricted-syntax
  for (const banknote of bankNotesList) {
    const banknoteCount = Math.floor(remainingAmount / banknote);
    numberOfBanknotes += banknoteCount;
    remainingAmount -= banknoteCount * banknote;
  }

  return numberOfBanknotes;
}
