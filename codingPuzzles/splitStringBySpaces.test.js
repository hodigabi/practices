"use strict";

const splitStringBySpaces = require("./splitStringBySpaces.js");

test("Example 1 splits the string", () => {
    expect(splitStringBySpaces('123456789', 2)).toEqual(['12','34','56','78','9']);
})

test("Example 2 trims the string", () => {
    expect(splitStringBySpaces('prignd rignd hidnthodngdrogn irdsog inrd gonrdg nordgdrgn driogn drognidro gndro grdn igodinhodrinh odrinhordnhdorhnid orgndorgn rdogn ordn godrn god gndo gdnr ', 160))
    .toEqual(['prignd rignd hidnthodngdrogn irdsog inrd gonrdg nordgdrgn driogn drognidro gndro grdn igodinhodrinh odrinhordnhdorhnid orgndorgn rdogn ordn godrn god gndo gdnr'])
})

test("Example 3 splits string by spaces", () => {
    expect(splitStringBySpaces('a a a a a a a a a a a', 20)).toEqual(['a a a a a a a a a a', 'a'])
})

test("Example 4 splits string by spaces", () => {
    expect(splitStringBySpaces('Here is a somewhat realistic example of this method being executed', 9))
    .toEqual(['Here is a','somewhat','realistic','example','of this','method','being','executed'])
})

test("Example 5 is edge case for string length", () => {
    expect(splitStringBySpaces('A', 1))
    .toEqual(['A'])
})

test("Example 6 splits the string in the middle", () => {
    expect(splitStringBySpaces('ABCD', 2))
    .toEqual(['AB', 'CD'])
})

test("Example 7 splits the string at spaces", () => {
    expect(splitStringBySpaces('ABC ABC ABC', 3))
    .toEqual(['ABC', 'ABC', 'ABC'])
})

test("Example 8 is a shifter", () => {
    expect(splitStringBySpaces('ABC A BC AB C ABC ABC A', 5))
    .toEqual(['ABC A', 'BC AB', 'C ABC', 'ABC A' ])
})
