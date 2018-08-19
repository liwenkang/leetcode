const log = console.log.bind(console)

// ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
var topKFrequent = function (words, k) {
    var dict = {}
    words.forEach(value => {
        if (dict[value] === undefined) {
            dict[value] = 1
        } else {
            dict[value]++
        }
    })
    var result = []
    for (var key in dict) {
        result.push([key, dict[key]])
    }
    result.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1]
        } else {
            var index = 0
            while (index < a[0].length && index < b[0].length && a[0][index].charCodeAt() === b[0][index].charCodeAt()) {
                index++
            }
            if (index === a[0].length || index === b[0].length) {
                return a[0].length - b[0].length
            } else {
                return a[0][index].charCodeAt() - b[0][index].charCodeAt()
            }
        }
    })
    var out = []
    for (var i = 0; i < k; i++) {
        out.push(result[i][0])
    }
    return out
}

topKFrequent(["aa", "a", "aaa"], 2)

topKFrequent(["rmrypv", "zgsedk", "jlmetsplg", "wnfbo", "hnnftqf", "bxlr", "sviavwoxss", "jdbgvc", "zddeno", "rxgw", "hnnftqf", "hdmvplne", "rlmdt", "jlmetsplg", "ous", "rmrypv", "fwxulnpit", "dmhuq", "rxgw", "ledleb", "bxlr", "indbvb", "ckqqibnx", "cub", "ijww", "ehd", "hfhlfqzkcn", "sviavwoxss", "rxgw", "bxjxpfp", "mgqj", "oic", "ptk", "fwxulnpit", "ijww", "sviavwoxss", "bgfvfa", "zfkgsudxq", "alkq", "dmhuq", "zddeno", "rxgw", "zgsedk", "amarxpg", "bgfvfa", "wnfbo", "sviavwoxss", "sviavwoxss", "alkq", "nmclxk", "zgsedk", "bwowfvira", "ous", "bxlr", "zddeno", "rxgw", "ous", "wnfbo", "rmrypv", "sviavwoxss", "ehd", "zgsedk", "jlmetsplg", "abxvhyehv", "ledleb", "wnfbo", "bgfvfa", "bwowfvira", "amarxpg", "wnfbo", "bwowfvira", "dmhuq", "ouy", "bxlr", "rxgw", "oic", "hnnftqf", "ledleb", "rlmdt", "oldainprua", "ous", "ckqqibnx", "dmhuq", "hnnftqf", "oic", "jlmetsplg", "ppn", "amarxpg", "jlgfgwb", "bxlr", "bwowfvira", "hdmvplne", "oic", "ledleb", "bwowfvira", "oic", "ptk", "dmhuq", "abxvhyehv", "ckqqibnx", "indbvb", "ypzfk", "rmrypv", "bxjxpfp", "amarxpg", "dmhuq", "sviavwoxss", "bwowfvira", "zfkgsudxq", "wnfbo", "rxgw", "jxkvrmajri", "cub", "abxvhyehv", "bwowfvira", "indbvb", "ehd", "ckqqibnx", "oic", "ptk", "hnnftqf", "ouy", "oic", "zgsedk", "abxvhyehv", "ypzfk", "ptk", "sviavwoxss", "rmrypv", "oic", "ous", "abxvhyehv", "hnnftqf", "hfhlfqzkcn", "ledleb", "cub", "ppn", "zddeno", "indbvb", "oic", "jlmetsplg", "ouy", "bwowfvira", "bklij", "gucayxp", "zfkgsudxq", "hfhlfqzkcn", "zddeno", "ledleb", "zfkgsudxq", "hnnftqf", "bgfvfa", "jlmetsplg", "indbvb", "ehd", "wnfbo", "hnnftqf", "rlmdt", "bxlr", "indbvb", "jdbgvc", "jlmetsplg", "cub", "jlgfgwb", "ypzfk", "indbvb", "dmhuq", "jlmetsplg", "zgsedk", "rmrypv", "cub", "rxgw", "ledleb", "rxgw", "sviavwoxss", "ckqqibnx", "hdmvplne", "dmhuq", "wnfbo", "jlmetsplg", "bxlr", "zfkgsudxq", "bxjxpfp", "ledleb", "indbvb", "ckqqibnx", "ous", "ckqqibnx", "cub", "ous", "abxvhyehv", "bxlr", "hfhlfqzkcn", "hfhlfqzkcn", "oic", "ten", "amarxpg", "indbvb", "cub", "alkq", "alkq", "sviavwoxss", "indbvb", "bwowfvira", "ledleb"],
    41)

/*
["indbvb","oic","sviavwoxss","bwowfvira","jlmetsplg","ledleb","rxgw","bxlr","dmhuq","hnnftqf","wnfbo","ckqqibnx","cub","ous","abxvhyehv","rmrypv","zgsedk","amarxpg","hfhlfqzkcn","zddeno","zfkgsudxq","alkq","bgfvfa","ehd","ptk","bxjxpfp","hdmvplne","ouy","rlmdt","ypzfk","fwxulnpit","ijww","jdbgvc","jlgfgwb","ppn","bklij","gucayxp","jxkvrmajri","mgqj","nmclxk","oldainprua"]
*/
