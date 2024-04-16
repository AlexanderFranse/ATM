import {
  isNominalValuePositive,
  isBanknoteWithinLimit,
} from "../../src/template";

describe(`An ATM needs to return the minimal amount of banknotes based on given nominal values. The nominal values represents banknotes.
1500 is the max that the ATM is allowed to withdraw. So for example, if I have a nominal value of 200 then the ATM returns 7.
That is because 7 times 200 is 1400 where 1500 is the max. This means the ATM withdraws 7 banknotes of 200 and not 8, because it would exceed the limit of 1500`, () => {
  describe("First, we need to validate if the nominal values are positive values", () => {
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
  describe("After we have validated that the nominal values are positive, we also need to validate if the banknote does not exceed the limit of 1500", () => {
    it("A nominal value of 100 is given. The ATM is able to process it", () => {
      expect(isBanknoteWithinLimit(100)).toBeTruthy();
    });
    it("A nominal value of 1700 is given. The ATM is unable to process it", () => {
      expect(isBanknoteWithinLimit(1700)).toBeFalsy();
    });
  });
});

/* it("A nominal value of 10 is given. The ATM is able to process it", () => {
  
}); */
