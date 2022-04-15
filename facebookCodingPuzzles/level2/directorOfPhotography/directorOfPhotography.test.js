"use strict";

const getArtisticPhotographCount = require("./directorOfPhotography.js");

test("Example 1 returns 1", () => {
    expect(getArtisticPhotographCount(5, "APABA", 1, 2)).toBe(1);
});

test("Example 2 returns 1", () => {
    expect(getArtisticPhotographCount(5, "APABA", 2, 3)).toBe(0);
});

test("Example 3 returns 3", () => {
    expect(getArtisticPhotographCount(8, ".PBAAP.B", 1, 3)).toBe(3);
});

test("Max range returns 1", () => {
    expect(getArtisticPhotographCount(15, "ABA..........PA", 1, 15)).toBe(1);
})