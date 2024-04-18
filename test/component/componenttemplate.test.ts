import { solve } from "../../src/template";

// TODO: Foei! White belt = geen component tests toegestaan ;) Zou je dit kunnen verplaatsen naar unit?
// TODO: Probeer eens wat complexe testcases toe te voegen om de randjes van je logica op te zoeken. Bijv. 1499 en dat soort leuke getallen.
describe("A user is able to withdraw an amount at the ATM. Only amounts between 1 and 1500 are allowed to withdraw.", () => {
  describe("After validations, we are able to determine the least number of banknotes that needs to be printed out depending on the withdraw amount chosen by the user", () => {
    it("User want to print 1500. Output is 3", () => {
      expect(solve(1500)).toBe(3);
    });
    it("User want to print 500. Output is 1", () => {
      expect(solve(500)).toBe(1);
    });
    it("User want to print 750. Output is 3", () => {
      expect(solve(750)).toBe(3);
    });
  });
  describe("The ATM should return -1 when positive withdraw amount is below the least banknote or when given withdraw amount is negative", () => {
    it("User want to print 1. Output is -1", () => {
      expect(solve(1)).toBe(-1);
    });
    it("User want to print -10. Output is -1", () => {
      expect(solve(-10)).toBe(-1);
    });
  });
});
