const log = console.log.bind(console)
/**
 * @param {number} num
 * @return {string[]}
 * 输入: n = 1
 * 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 * 上 0 ~ 3
 * 下 0 ~ 5
 * num 的取值范围 0 ~ 8
 */
var topArr = function (num) {
    // num 取值 0,1,2,3
    var result = []
    if (num === 0) {
        result.push("0:")
    }
    if (num === 1) {
        result.push("1:")
        result.push("2:")
        result.push("4:")
        result.push("8:")
    }
    if (num === 2) {
        result.push("3:")
        result.push("5:")
        result.push("6:")
        result.push("9:")
        result.push("10:")
    }
    if (num === 3) {
        result.push("7:")
        result.push("11:")
    }
    return result
};

var bottomArr = function (num) {
    // num 取值 0,1,2,3
    var result = []
    if (num === 0) {
        result.push("00")
    }
    if (num === 1) {
        result.push("01")
        result.push("02")
        result.push("04")
        result.push("08")
        result.push("16")
        result.push("32")
    }
    if (num === 2) {
        result.push("03")
        result.push("05")
        result.push("06")
        result.push("09")
        result.push("10")
        result.push("12")
        result.push("17")
        result.push("18")
        result.push("20")
        result.push("24")
        result.push("33")
        result.push("34")
        result.push("36")
        result.push("40")
        result.push("48")
    }
    if (num === 3) {
        result.push("07")
        result.push("11")
        result.push("13")
        result.push("14")
        result.push("19")
        result.push("21")
        result.push("22")
        result.push("25")
        result.push("26")
        result.push("28")
        result.push("35")
        result.push("37")
        result.push("38")
        result.push("41")
        result.push("42")
        result.push("44")
        result.push("49")
        result.push("50")
        result.push("52")
        result.push("56")
    }
    if (num === 4) {
        result.push("15")
        result.push("23")
        result.push("27")
        result.push("29")
        result.push("30")
        result.push("39")
        result.push("43")
        result.push("45")
        result.push("46")
        result.push("51")
        result.push("53")
        result.push("54")
        result.push("57")
        result.push("58")
    }
    if (num === 5) {
        result.push("31")
        result.push("47")
        result.push("55")
        result.push("59")
    }
    return result
};

var readBinaryWatch = function (num) {
    var result = []
    for (var i = 0; i <= 3; i++) {
        var topNum = i
        var bottomNum = num - topNum
        if (bottomNum >= 0 && bottomNum <= 5) {
            result.push([topNum, bottomNum])
        }
    }

    var out = []

    for (var i = 0; i < result.length; i++) {
        var top = result[i][0]
        var bottom = result[i][1]
        var topA = topArr(top)

        var topB = bottomArr(bottom)

        for (var m = 0; m < topA.length; m++) {
            for (var n = 0; n < topB.length; n++) {
                out.push(topA[m] + topB[n])
            }
        }
    }
    log("out",out)
    return out
};


// readBinaryWatch(0)
// readBinaryWatch(1)
// readBinaryWatch(2)
readBinaryWatch(3)
// readBinaryWatch(4)
// readBinaryWatch(5)
// readBinaryWatch(6)
// readBinaryWatch(7)
// readBinaryWatch(8)

    ["0:07","0:11","0:13","0:14","0:19","0:21","0:22","0:25","0:26","0:28","0:35","0:37","0:38","0:41","0:42","0:44","0:49","0:50","0:52","0:56","1:03","1:05","1:06","1:09","1:10","1:12","1:17","1:18","1:20","1:24","1:33","1:34","1:36","1:40","1:48","2:03","2:05","2:06","2:09","2:10","2:12","2:17","2:18","2:20","2:24","2:33","2:34","2:36","2:40","2:48","4:03","4:05","4:06","4:09","4:10","4:12","4:17","4:18","4:20","4:24","4:33","4:34","4:36","4:40","4:48","8:03","8:05","8:06","8:09","8:10","8:12","8:17","8:18","8:20","8:24","8:33","8:34","8:36","8:40","8:48","3:01","3:02","3:04","3:08","3:16","3:32","5:01","5:02","5:04","5:08","5:16","5:32","6:01","6:02","6:04","6:08","6:16","6:32","9:01","9:02","9:04","9:08","9:16","9:32","10:01","10:02","10:04","10:08","10:16","10:32","700","1100"]