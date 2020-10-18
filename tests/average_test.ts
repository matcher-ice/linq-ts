import { enumerable } from "../src/main.ts";
import { assertStrictEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { errorMoreThanOneMatch, errorNoElements, errorNoMatch, errorOutOfIndex } from "../src/error/ErrorMessage.ts";
import { EnumerableError } from "../src/error/EnumerableError.ts";

Deno.test("average", () => {
    assertStrictEquals(
        enumerable(["Can", "I", "find", "a", "trick", "recalling", "pi", "easily?"]).average(s => s.length),
        32 / 8
    );

    assertThrows(
        () => { enumerable([] as number[]).average(n => n) },
        EnumerableError,
        errorNoElements
    );
});