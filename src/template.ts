export function solve(x: number) {
  const atmLimit = 1500;
  const result = atmLimit / x;
  return Math.trunc(result);
}
export function isNominalValuePositive(x: number): boolean {
  return x > 0;
}
