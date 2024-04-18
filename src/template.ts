export function isWithdrawAmountWithinLimit(withdrawAmount: number) {
  return withdrawAmount >= 10 && withdrawAmount <= 1500;
}

export function leastNumberOfBanknotes(withdrawAmount: number): number {
  if (!isWithdrawAmountWithinLimit(withdrawAmount)) {
    return -1;
  }

  const bankNotesList = [500, 200, 100, 50, 20, 10];
  let remainingAmount = withdrawAmount;
  let numberOfBanknotes = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const banknote of bankNotesList) {
    const banknoteCount = Math.floor(remainingAmount / banknote);
    numberOfBanknotes += banknoteCount;
    remainingAmount -= banknoteCount * banknote;
  }
  return numberOfBanknotes;
}
