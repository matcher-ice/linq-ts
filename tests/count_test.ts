import { enumerable } from "../src/main.ts";
import { assertStrictEquals, assertNotStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("count", () => {
    assertStrictEquals(
        enumerable([] as number[]).count(),
        0
    );

    assertStrictEquals(
        enumerable([] as number[]).count(n => n > 0),
        0
    );

    assertStrictEquals(
        enumerable([1, 5, 8]).count(),
        3
    );

    assertNotStrictEquals(
        enumerable([1, 5, 8]).count(),
        3n
    );

    assertStrictEquals(
        enumerable([1, 5, 8]).count(n => n % 2 === 0),
        1
    );

    assertStrictEquals(
        enumerable([1, 5, 8]).count(n => n > 10),
        0
    );

    assertStrictEquals(
        enumerable([
            { foo: "foo" },
            { foo: "bar" },
            { foo: "baz" }
        ]).count(
            o => o.foo.startsWith("b")
        ),
        2
    );

    assertNotStrictEquals(
        enumerable([
            { foo: "foo" },
            { foo: "bar" },
            { foo: "baz" }
        ]).count(
            o => o.foo.startsWith("f")
        ),
        2
    );
});