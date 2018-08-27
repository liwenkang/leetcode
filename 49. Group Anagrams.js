const log = console.log.bind(console)
/*Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]*/

var judgeSame = function (str1, str2) {
    // 两个字符串
    if (str1.length !== str2.length) {
        return false
    } else {
        for (var i = 0; i < str1.length; i++) {
            var flag = false
            for (var j = 0; j < str2.length; j++) {
                if (str1[i] === str2[j]) {
                    str1 = str1.slice(0, i) + str1.slice(i + 1)
                    str2 = str2.slice(0, j) + str2.slice(j + 1)
                    i--
                    j--
                    flag = true
                }
            }
            if (flag === false) {
                return false
            }
        }
        return true
    }
}

var groupAnagrams = function (strs) {
    var result = []
    for (var i = 0; i < strs.length; i++) {
        var item = [strs[i]]
        for (var j = i + 1; j < strs.length; j++) {
            if (judgeSame(strs[i], strs[j])) {
                item.push(strs[j])
                strs.splice(j, 1)
                j--
            }
        }
        result.push(item)
        strs.splice(i, 1)
        i--
    }
    return result
}

log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))