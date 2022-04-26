"use strict"

/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
 function getSecondsRequired(N, F, P) {
    // there is only one frog
    if (F === 1) return N - P[0];

    // all lily pads are occupied
    if (F === N-1) return F;

    let result = 0;
    P.sort((a, b) => a-b);

    for(let i=1; i< P.length; i++)
    {
        let diff = P[i] - P[i-1] - 1;
        result += diff;
    }

    result += N - P[P.length-1] - 1;

    return result + F;
}

module.exports = getSecondsRequired;