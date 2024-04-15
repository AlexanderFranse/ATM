import { solve, isNominalValuePositive } from "../../src/template";

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
});

it("A nominal value of 10 is given. The ATM is able to process it", () => {
  expect(solve(500)).toBe(3);
});
