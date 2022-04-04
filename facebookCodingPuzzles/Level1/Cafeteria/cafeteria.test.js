"use strict";

const getMaxAdditionalDinersCount = require("./cafeteria.js");

test("Example 1 returns 3", () => {
    expect(getMaxAdditionalDinersCount(10, 1, 2, [2, 6])).toBe(3);
});

test("Example 2 returns 1", () => {
    expect(getMaxAdditionalDinersCount(15, 2, 3, [11, 6, 14])).toBe(1);
});