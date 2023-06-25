"use strict";

const getMaximumEatenDishCount = require("./kaitenzushi.js");

test("Example 1 returns 5", () => {
    expect(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 1)).toBe(5);
});

test("Example 2 returns 5", () => {
    expect(getMaximumEatenDishCount(6, [1, 2, 3, 3, 2, 1], 2)).toBe(4);
});

test("Example 3 returns 5", () => {
    expect(getMaximumEatenDishCount(7, [1, 2, 1, 2, 1, 2, 1], 2)).toBe(2);
});