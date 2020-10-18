import { enumerable } from "../src/main.ts";
import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("all", () => {
    assertStrictEquals(
        enumerable([1, 6, -3]).all(n => n % 2 === 1),
        false
    );

    assertStrictEquals(
        enumerable([1, 101, 13]).all(n => n % 2 === 1),
        true
    );

    assertStrictEquals(
        enumerable([1, 6, -3]).all(n => n % 2 === 1),
        false
    );

    assertStrictEquals(
        enumerable([] as number[]).all(n => n > 0),
        true
    );
});