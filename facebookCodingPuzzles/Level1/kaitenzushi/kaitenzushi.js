"use strict";

/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
    let result = 0;
    let coll = new Map();
    let indexes = [];

    for (let i=0; i<N; i++) {
        let meal = D[i];

        // coll represents a hash table for quick check if the dish was 'recently' eaten
        if (!coll.get(meal)){
            coll.set(meal, 1)

            // store the index of the eaten dish so it could be removed later
            indexes.push(i);
            if (coll.size > K) {
                coll.delete(D[indexes[result-K]]);
            }
            result++;
        }
    }
    return result;
}

module.exports = getMaximumEatenDishCount;
