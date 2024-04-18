import {
  isWithdrawAmountWithinLimit,
  leastNumberOfBanknotes,
} from "../../src/template";

describe(`A user is able to withdraw an amount at the ATM. Only amounts between 1 and 1500 are allowed to withdraw.
Before the ATM withdraws any banknotes, a validation is needed if the withdraw amount is between 10 and 1500`, () => {
  describe("The ATM is able to validate withdraw amounts of: ", () => {
    it("10. The ATM is able to withdraw the chosen amount by the user", () => {
      expect(isWithdrawAmountWithinLimit(10)).toBeTruthy();
    });
    it("1500. The ATM is able to withdraw the chosen amount by the user", () => {
      expect(isWithdrawAmountWithinLimit(1200)).toBeTruthy();
    });
  });
  describe("The ATM is not able to validate withdraw amounts that are not between 10 and 1500. The ATM is unable to validate withdraw amounts of: ", () => {
    it("1. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountWithinLimit(1)).toBeFalsy();
    });
    it("9. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountWithinLimit(9)).toBeFalsy();
    });
    it("1501. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountWithinLimit(1501)).toBeFalsy();
    });
    it("-20. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountWithinLimit(-20)).toBeFalsy();
    });
  });
  describe("After the isWithinLimit validation, we are able to determine the least number of banknotes that needs to be printed out depending on the withdraw amount chosen by the user", () => {
    it("User want to print 1500. Output is 3", () => {
      expect(leastNumberOfBanknotes(1500)).toBe(3);
    });
    it("User want to print 500. Output is 1", () => {
      expect(leastNumberOfBanknotes(500)).toBe(1);
    });
    it("User want to print 750. Output is 3", () => {
      expect(leastNumberOfBanknotes(750)).toBe(3);
    });
  });
  describe("The ATM should return -1 when positive withdraw amount is below the least banknote or when given withdraw amount is negative", () => {
    it("User want to print 1. Output is -1", () => {
      expect(leastNumberOfBanknotes(1)).toBe(-1);
    });
    it("User want to print -10. Output is -1", () => {
      expect(leastNumberOfBanknotes(-10)).toBe(-1);
    });
  });
});
