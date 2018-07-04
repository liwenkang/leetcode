const log = console.log.bind(console)

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 *
 输入:
 ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
 输出:
 ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
 */
var splicString = function (arr, num) {
    // num = 1
    return arr.slice(-num).join(".")
    // mail.com
}

splicString(['google', 'mail', 'com'], 1)
splicString(['google', 'mail', 'com'], 2)

var subdomainVisits = function (cpdomains) {
    var dict = {}
    for (var i = 0; i < cpdomains.length; i++) {
        cpdomains[i] = cpdomains[i].split(" ")
    }

    for (var j = 0; j < cpdomains.length; j++) {
        var str = cpdomains[j][1].split(".")
        var count = parseInt(cpdomains[j][0])
        for (var k = 1; k < str.length + 1; k++) {
            if (dict[splicString(str, k)] === undefined) {
                dict[splicString(str, k)] = 0
            }
            dict[splicString(str, k)] += count
        }
    }
    var result = []
    Object.keys(dict).forEach(function (key) {
        result.push(dict[key] + " " + key)
    })

    return result
    // log("result", result)
}
//
subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])