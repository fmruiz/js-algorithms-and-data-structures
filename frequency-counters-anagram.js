/**
 * Frequency Counters - Anagram
 *
 * This is useful in algorithms challenges when you have
 * multiple pieces of data, multiple inputs and you need compare then.
 *
 * Example:
 *
 * Given two strings, write a fn to determine if the second
 * string is an anagram of the first
 */

/**
 * Time complexity BigO(n)
 */
function anagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    /**
     * Set the frequency counter objs
     */
    let firstFrequencyCounter = {};
    let secondFrequencyCounter = {};

    /**
     * Complete the obj with key and value based on the values of first word
     * the key is the specific value and the value of that key is how many
     * times repeat the same letter
     */
    for (let val of firstWord) {
        firstFrequencyCounter[val] = (firstFrequencyCounter[val] || 0) + 1;
    }

    /**
     * Same here but based on the second word
     */
    for (let val of secondWord) {
        secondFrequencyCounter[val] = (secondFrequencyCounter[val] || 0) + 1;
    }

    for (let key in firstFrequencyCounter) {
        if (!key in secondFrequencyCounter) {
            return false;
        }

        if (secondFrequencyCounter[key] !== firstFrequencyCounter[key]) {
            return false;
        }
    }

    return true;
}

/**
 * Anagram fn with different approach
 */
function secondAnagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < firstWord.length; i++) {
        let letter = firstWord[i];

        /**
         * If letter exists, increment or set to 1
         */
        lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < secondWord.length; i++) {
        let letter = secondWord[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
