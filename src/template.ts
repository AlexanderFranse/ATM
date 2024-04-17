export function isNominalValuePositive(x: number) {
  return x > 0;
}

export function isBanknoteWithinLimit(x: number) {
  return x <= 1500;
}

export function solve(x: number): number {
  if (!isNominalValuePositive(x) || !isBanknoteWithinLimit(x)) {
    return -1;
  }

  const bankNotesList = [500, 200, 100, 50, 20, 10];
  let remainingAmount = x;
  let numberOfBanknotes = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const banknote of bankNotesList) {
    const banknoteCount = Math.floor(remainingAmount / banknote);
    numberOfBanknotes += banknoteCount;
    remainingAmount -= banknoteCount * banknote;
  }

  return numberOfBanknotes;
}
