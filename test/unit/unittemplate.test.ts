import {
  solve,
  isNominalValuePositive,
  isBanknoteWithinLimit,
} from "../../src/template";

describe(`An ATM needs to return the minimal amount of banknotes based on given nominal values.
1500 is the max that the ATM is allowed to withdraw. So for example, if I have a nominal value of 200 then the ATM returns 7.
That is because 7 times 200 is 1400 where 1500 is the max. This means the ATM withdraws 7 banknotes of 200 and not 8, because it exceeds the limit of 1500`, () => {
  describe("First, we need to validate if the numbers are positive values", () => {
    it("A nominal value of 10 is given. The ATM is able to process it", () => {
      expect(isNominalValuePositive(10)).toBeTruthy();
    });
    it("A nominal value of 0 is given. The ATM is unable to process it", () => {
      expect(isNominalValuePositive(0)).toBeFalsy();
    });
    it("A nominal value of -20 is given. The ATM is unable to process it", () => {
      expect(isNominalValuePositive(-20)).toBeFalsy();
    });
  });
  describe("After we validates if the banknotes are positive numbers, we also need to validate if the banknote does not exceed the limit of 1500", () => {
    it("A nominal value of 100 is given. The ATM is able to process it", () => {
      expect(isBanknoteWithinLimit(100)).toBeTruthy();
    });
    it("A nominal value of 1700 is given. The ATM is unable to process it", () => {
      expect(isBanknoteWithinLimit(1700)).toBeFalsy();
    });
  });
  describe("After validating, we can check how much nominal values can be printed out by the ATM", () => {
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

/* it("A nominal value of 10 is given. The ATM is able to process it", () => {
  
}); */
