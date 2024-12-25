import { printNumber } from "./printNumber";
import dotenv from "dotenv";

describe("printNumber", () => {
  beforeAll(() => {
    dotenv.config();
  });

  it("should return the input if it is a number", () => {
    expect(printNumber(Number(process.env.NUMBER_FIVE))).toBe(5);
    expect(printNumber(process.env.NUMBER_SEVEN)).toBe(NaN);
    expect(printNumber(0)).toBe(0);
    expect(printNumber(-10)).toBe(-10);
  });

  it("should return NaN if the input is not a number", () => {
    expect(printNumber("5")).toBeNaN();
    expect(printNumber(null)).toBeNaN();
    expect(printNumber(undefined)).toBeNaN();
    expect(printNumber({})).toBeNaN();
    expect(printNumber([])).toBeNaN();
  });
});
