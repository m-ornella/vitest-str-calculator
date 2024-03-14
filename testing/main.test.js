import { expect, test } from "vitest";
import { add } from "../main";

test("empty str returns zero", () => {
  expect(add("")).toBe(0);
});

test("1 returns one", () => {
  expect(add("1")).toBe(1);
});

test("1, 2 returns 3", () => {
  expect(add("1, 3")).toBe(4);
});
