const log = console.log.bind(console)
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toUpperCase() === word) {
        return true
    }
    if (word.toLowerCase() === word) {
        return true
    }
    // Google
    if (word.toLowerCase().slice(1) === word.slice(1)) {
        return true
    }
    return false
}

detectCapitalUse("USA")
detectCapitalUse("UaA")
detectCapitalUse("leetcode")
detectCapitalUse("Leetcode")
