const log = console.log.bind(console)

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 * 输入：S = "5F3Z-2e-9-w", K = 4
 * 输出："5F3Z-2E9W"
 * 解释：字符串 S 被分成了两个部分，每部分 4 个字符；
 * 注意，两个额外的破折号需要删掉。
 */
var licenseKeyFormatting = function (S, K) {
    var str = S.split("-").join("").split("").join("").toUpperCase()
    log(str)
    // 倒着截取
    var length = Math.ceil(str.length / K)
    var result = []
    for (var i = 0; i < length; i++) {
        result.unshift(str.slice(-K))
        str = str.slice(0, -K)
    }
    result = result.join("-")
    return result
}

licenseKeyFormatting("5F3Z-2e-9-w", 4)