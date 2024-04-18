import { isWithdrawAmountTenOrMore } from "../../src/template";

describe(`A user is able to withdraw an amount at the ATM. Only amounts between 1 and 1500 are allowed to withdraw.
Before the ATM withdraws any banknotes, a validation is needed if the withdraw amount is between 10 and 1500`, () => {
  // TODO: waarom amounts tussen 10 en 1200?
  describe("The ATM is able to validate withdraw amounts of 10 and 1200", () => {
    it("User want to print 10. The ATM is able to withdraw the chosen amount by the user", () => {
      expect(isWithdrawAmountTenOrMore(10)).toBeTruthy();
    });
    it("User want to print 1200. The ATM is able to withdraw the chosen amount by the user", () => {
      expect(isWithdrawAmountTenOrMore(1200)).toBeTruthy();
    });
  });
  // TODO: goed de happy en unhappy testcases gescheiden. Ik kan uit de testcases alleen niet de business rule halen dat je alleen amounts tussen 1 en 1500 mag opnemen.
  describe("The ATM is unable to validate withdraw amounts of 1, -20 and 2000", () => {
    it("User want to print 1. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountTenOrMore(1)).toBeFalsy();
    });
    it("User want to print -20. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountTenOrMore(-20)).toBeFalsy();
    });
    // TODO: dit zou, op basis van de functienaam, true moeten zijn toch?
    it("User want to print 2000. The ATM is unable to withdraw any banknotes", () => {
      expect(isWithdrawAmountTenOrMore(2000)).toBeFalsy();
    });
  });
});

/* it("A nominal value of 10 is given. The ATM is able to process it", () => {
  
}); */
