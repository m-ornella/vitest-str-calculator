import { expect, test } from "vitest";
import { add } from "../main";

test("empty str returns zero", () => {
  expect(add("")).toBe(0);
});
