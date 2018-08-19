const log = console.log.bind(console)
/**
 * Initialize your data structure here.
 */

var WordDictionary = function () {
    this.dict = []
}

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.dict.push(word)
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    var reg = new RegExp("^" + word + "$")
    for (var i = 0; i < this.dict.length; i++) {
        if (reg.test(this.dict[i])) {
            return true
        }
    }
    return false
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */