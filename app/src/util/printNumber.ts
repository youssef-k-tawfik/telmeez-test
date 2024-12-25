export function printNumber(input: unknown): number {
  if (typeof input === "number") {
    return input;
  } else {
    return NaN;
  }
}
