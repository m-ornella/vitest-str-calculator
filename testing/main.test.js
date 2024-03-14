import { expect, test } from "vitest";
import { add } from "../main";

test("empty str returns zero", () => {
  expect(add("")).toBe(0);
});

test("1 returns one", () => {
  expect(add("1")).toBe(1);
});

test("1, 2 returns 3", () => {
  expect(add("1, 10, 1, 1\n4")).toBe(17);
});
