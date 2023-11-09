/**
 * Frequency Counters - Numbers
 *
 * This is useful in algorithms challenges when you have
 * multiple pieces of data, multiple inputs and you need compare then
 *
 * Example:
 *
 * Write a fn called same, which accepts two arrays of numbers.
 * The fn should return true if every value in the array has
 * its corresponding value squared in the second array.
 * The frequency of the values must be the same
 */

function same(firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false;
    }

    for (let i = 0; i < firstArr.length; i++) {
        let correctIndex = secondArr.indexOf(firstArr[i] ** 2);

        if (correctIndex === -1) {
            return false;
        }

        secondArr.splice(correctIndex, 1);
    }

    return true;
}

/**
 * Refactored with time complexity O(n)
 */

function sameRefactored(firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false;
    }

    let firstFrequencyCounter = {};
    let secondFrequencyCounter = {};

    /**
     * Complete the obj with key and value based on the values of first array
     * the key is the specific value and the value of that key is how many
     * times repeat the same number
     */
    for (let val of firstArr) {
        firstFrequencyCounter[val] = (firstFrequencyCounter[val] || 0) + 1;
    }

    /**
     * Same here but based on the second array
     */
    for (let val of secondArr) {
        secondFrequencyCounter[val] = (secondFrequencyCounter[val] || 0) + 1;
    }

    /**
     * Check if the values of the second frequency counter obj is the square
     * in relation with the first frequency counter obj values
     */
    for (let key in firstFrequencyCounter) {
        if (!(key ** 2 in secondFrequencyCounter)) {
            return false;
        }

        if (secondFrequencyCounter[key ** 2] !== firstFrequencyCounter[key]) {
            return false;
        }
    }

    return true;
}
