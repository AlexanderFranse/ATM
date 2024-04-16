// eslint-disable-next-line import/no-extraneous-dependencies
import { loadFeature, defineFeature } from "jest-cucumber";
import { solve } from "../../src/template";

const feature = loadFeature("./cucumber/features/template.feature");

defineFeature(feature, (test) => {
  test("Print out 3 when given banknote is 500", ({ when, then }) => {
    let input: number;
    when("the user is withdrawing 1500 with banknotes of 500", () => {
      input = 500;
    });

    then("the result is 3", () => {
      const output = solve(input);
      expect(output).toBe(3);
    });
  });
  test("Print out -1 when given banknote is 2000", ({ when, then }) => {
    let input: number;
    when("the user is withdrawing 1500 with banknotes of 2000", () => {
      input = 2000;
    });

    then("the result is -1", () => {
      const output = solve(input);
      expect(output).toBe(-1);
    });
  });
});
