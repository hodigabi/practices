"use strict"

/**
 * @param {number} N
 * @param {number} F
 * @param {number[]} P
 * @return {number}
 */
 function getSecondsRequired(N, F, P) {
    // when there is only one frog, it needs to jump through all lily pads
    if (F === 1) return N - P[0];

    // all lily pads are occupied
    if (F === N-1) return F;

    let result = 0;
    P.sort((a, b) => a-b);

    // all free lily pads should be jumped on only once
    // so it is enough to calculate the free lily pads
    for (let i=1; i< P.length; i++)
    {
        let diff = P[i] - P[i-1] - 1;
        result += diff;
    }

    // calculate the free lily pads ahead of the leading frog
    result += N - P[P.length-1] - 1;

    return result + F;
}

module.exports = getSecondsRequired;