"use strict";

// Given a string and a desired chunk length, split the string into chunks of size <= length, prioritizing splitting on spaces if possible.

/*
 Examples:
 chunkString('123456789', 2)
  returns ['12','34','56','78','9']

 chunkString('Here is a somewhat realistic example of this method being executed',9)
  returns ['Here is a','somewhat','realistic','example','of this','method','being','executed']

 chunkString("a a a a a a a a a a a", 20)
  returns ['a a a a a a a a a a', 'a']

 chunkString("prignd rignd hidnthodngdrogn irdsog inrd gonrdg nordgdrgn driogn drognidro gndro grdn igodinhodrinh odrinhordnhdorhnid orgndorgn rdogn ordn godrn god gndo gdnr ", 160)
  returns ['prignd rignd hidnthodngdrogn irdsog inrd gonrdg nordgdrgn driogn drognidro gndro grdn igodinhodrinh odrinhordnhdorhnid orgndorgn rdogn ordn godrn god gndo gdnr']
  // note the additional space at the end of the input string
*/

function splitStringBySpaces(str, len) {
    let result = [];

    // early exit
    if (!str || !len || len <= 0) return result;

    str = str.trim();
    if (len >= str.length) {
        result.push(str);
        return result;
    }

    // the index of the last space char
    var spaceIndex = 0;

    // the index of the start of the substring
    var startIndex = 0;

    // the idea is to go through the string only once and collect the substrings into an array
    // a substring is formed when the length limitation is reached
    for (let i=1; i<str.length; i++) {
        if (isSpace(str[i])) {
            spaceIndex = i;
        }

        if ((i - startIndex) % len === 0) {
            // split on space or split the word
            let lastIndex = spaceIndex > startIndex ? spaceIndex : startIndex + len;

            result.push(str.substring(startIndex, lastIndex));

            startIndex = lastIndex;

            // do not start the new substring with a space
            while (isSpace(str[startIndex])) startIndex++;

            i = startIndex;
            spaceIndex = startIndex;
        }
    }

    // due to the second if condition within the loop, it is likely to have leftover chars
    if (str.length - startIndex > 0) {
        result.push(str.substring(startIndex));
    }

    return result;
}

function isSpace(char) {
    if (char === ' ') return true;
    return false;
}

module.exports = splitStringBySpaces;