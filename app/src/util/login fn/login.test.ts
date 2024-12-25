import { simulateLogin } from "./login";

describe("simulateLogin", () => {
  it("should return true for correct username and password", () => {
    expect(simulateLogin("admin", "admin")).toBe(true);
  });

  it("should return false for incorrect username", () => {
    expect(simulateLogin("user", "admin")).toBe(false);
  });

  it("should return false for incorrect password", () => {
    expect(simulateLogin("admin", "password")).toBe(false);
  });

  it("should return false for incorrect username and password", () => {
    expect(simulateLogin("user", "password")).toBe(false);
  });
});
