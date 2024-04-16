import { solve } from "../../src/template";

describe("The ATM should print out the number of banknotes that is within the limit of 1500. Example: 500 should print out 3 as it is exactly 1500", () => {
  describe("After validations, we are able to check how much nominal values can be printed out by the ATM", () => {
    it("The ATM should print out 3 banknotes of 500", () => {
      expect(solve(500)).toBe(3);
    });
    it("The ATM should print out 7 banknotes of 200", () => {
      expect(solve(200)).toBe(7);
    });
    it("The ATM should print out 15 banknotes of 100", () => {
      expect(solve(100)).toBe(15);
    });
  });
  describe("The ATM should not be able to print out banknotes when it does not pass the validations", () => {
    it("The ATM should not print out banknotes when 10000 banknotes of 5 is given", () => {
      expect(solve(10000)).toBe(-1);
    });
  });
});
