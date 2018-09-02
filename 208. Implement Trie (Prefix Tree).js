const log = console.log.bind(console)

/*
* Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
*/

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.trie = []
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    this.trie.unshift(word)
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    return this.trie.includes(word)
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    for (var i = 0; i < this.trie.length; i++) {
        if (prefix === this.trie[i].slice(0, prefix.length)) {
            return true
        }
    }
    return false
}

// [
//     "Trie",
//     "insert","insert","insert","insert","insert","insert",
//     "search","search","search","search","search","search","search","search","search",
//     "startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith","startsWith"
// ]
// [
//     [],
//
//     ["app"],["apple"],["beer"],["add"],["jam"],["rental"],
//     null,null,null,null,null,null,
//     ["apps"],["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"],
//     false,true,false,false,false,false,false,true,true,
//     ["apps"], ["app"],["ad"],["applepie"],["rest"],["jan"],["rent"],["beer"],["jam"]
//     false,     true,   true,    false,      false,   false,   true,   true,    true
// ]

// ["app","apple","beer","add","jam","rental"]




