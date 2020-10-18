import { enumerable } from "../src/main.ts";
import { assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("any", () => {
    assertStrictEquals(
        enumerable([1, 5, 3]).any(n => n < 0),
        false
    );

    assertStrictEquals(
        enumerable([1, 5, 3]).any(n => n === 3),
        true
    );

    assertStrictEquals(
        enumerable([] as string[]).any(s => s.length > 0),
        false
    );
    
    assertStrictEquals(
        enumerable(["hello"]).any(),
        true
    );

    assertStrictEquals(
        enumerable([] as string[]).any(),
        false
    );
});