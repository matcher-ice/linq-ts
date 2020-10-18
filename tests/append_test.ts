import { enumerable } from "../src/main.ts";
import { assertEquals, assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("append", () => {
    assertEquals(
        [...enumerable([1, 5, 3]).append(1)],
        [1, 5, 3, 1]
    );
    
    assertEquals(
        [...enumerable([] as string[]).append("foo")],
        ["foo"]
    );
});