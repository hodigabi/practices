"use strict";

/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */

function getMaxAdditionalDinersCount(N, K, M, S) {
    // the space needed between two existing diner in order to be able to seat one more diner
    const space = 1 + 2*K;
    let result = 0;
    let diff = 0;

    // making S ordered so the for loop can iterate it through correctly
    S = S.sort((a,b) => a-b);

    // ignore the space before the first and after the last diner
    for(let i = 1; i<=M-1; i++)
    {
        // the space between two diners
        diff = S[i] - S[i-1] - 1;

        // if there is enough space to seat at least one new diner
        if(diff >= space)
        {
            result++;
            diff -= space;

            // any additional diner need only K + 1 space
            result += Math.floor(diff / (K+1));
        }
    }

    // add diner(s) to the left of the first diner
    diff = S[0] - 1;
    result += Math.floor(diff / (K+1));

    // add diner(s) to the right of the last diner
    diff = N - S[S.length-1];
    result += Math.floor(diff / (K+1));

    return result;
}

module.exports = getMaxAdditionalDinersCount;