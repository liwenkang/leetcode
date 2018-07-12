const log = console.log.bind(console)

/**
 * 效率不高
 * @param {string} s
 * @return {number}
 */

var isReverse = function (arr) {
    var reverseArr = arr.slice(0)
    if (reverseArr.reverse().toString() === arr.toString()) {
        return true
    } else {
        return false
    }
}

var longestPalindrome = function (s) {
    var arr = s.split("")
    var maxLength = 0
    var str = ""
    for (var i = 0; i < s.length; i++) {
        for (var j = s.length - i; j >= 0; j--) {
            var array = arr.slice(i, i + j)
            if (isReverse(array)) {
                if (array.length > maxLength) {
                    maxLength = array.length
                    str = array.join("")
                    break
                }
            }
        }
        if (s.length - i < maxLength) {
            break
        }
    }
    log(str)
    return str
}

longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth")

