import { enumerable } from "../src/main.ts";
import { assertStrictEquals, assertEquals, assertNotStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("defaultIfEmpty", () => {
    const t = [...enumerable(["foo", "bar", "baz"]).defaultIfEmpty("No items")];

    assertEquals(
        [...enumerable(["foo", "bar", "baz"]).defaultIfEmpty("No items")],
        ["foo", "bar", "baz"]
    );

    const arr = ["foo", "bar", "baz"];
    assertNotStrictEquals(
        [...enumerable(arr).defaultIfEmpty("No items")],
        arr
    );

    assertEquals(
        [...enumerable([] as string[]).defaultIfEmpty("No items")],
        ["No items"]
    );
});