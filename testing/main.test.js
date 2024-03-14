import { expect, test } from "vitest";
import { add } from "../main";

test("empty str returns zero", () => {
  expect(add("")).toBe(0);
});

test("1 returns one", () => {
  expect(add("1")).toBe(1);
});

test("1, 2 returns 3", () => {
  expect(add("1, 2")).toBe(3);
});

test("\n accepted as delimeter", () => {
  expect(add("1, 2\n1")).toBe(4);
});

test("multiple delimeters accepted", () => {
  expect(add("//1, 2\n1;1")).toBe(5);
});
