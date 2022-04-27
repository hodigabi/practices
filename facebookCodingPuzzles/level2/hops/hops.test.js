"use strict";

const getSecondsRequired = require("./hops.js");

test("Example 1 returns 2", () => {
    expect(getSecondsRequired(3, 1, [1])).toBe(2);
})

test("Example 2 returns 4", () => {
    expect(getSecondsRequired(6, 3, [5, 2, 4])).toBe(4);
})

test("Custom test returns 14", () => {
    expect(getSecondsRequired(13, 5, [11, 9, 2, 5, 10])).toBe(11);
})

test("All lily pads are occupied returns the number of the frogs", () => {
    expect(getSecondsRequired(3, 2, [1,2])).toBe(2);
})

test("Alone frog returns the number of lily pads ahead of it", () => {
    expect(getSecondsRequired(4, 1, [1])).toBe(3);
})