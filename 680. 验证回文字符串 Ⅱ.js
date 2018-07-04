var validPalindrome = function (s) {
    if (s.split("").reverse().join("") === s) {
        return true
    }
    var l = Math.floor(s.length / 2)
    for (var i = 0; i < l; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            if (s[i + 1] === s[s.length - 1 - i]) {
                var temp = s
                temp = temp.slice(0, i).concat(temp.slice(i + 1))
                if (temp.split("").reverse().join("") === temp) {
                    return true
                }
            }

            if (s[i] === s[s.length - 2 - i]) {
                var temp = s
                temp = temp.slice(0, temp.length - 1 - i).concat(temp.slice(temp.length - i))
                if (temp.split("").reverse().join("") === temp) {
                    return true
                }
            }
            return false
        }
    }
    return true
};
