export function isNominalValuePositive(x: number) {
  return x > 0;
}

export function isBanknoteWithinLimit(x: number) {
  return x <= 1500;
}

export function solve(x: number) {
  if (!isNominalValuePositive(x) || !isBanknoteWithinLimit(x)) {
    return -1;
  }
  const atmLimit = 1500;
  const result = atmLimit / x;
  return Math.trunc(result);
}
