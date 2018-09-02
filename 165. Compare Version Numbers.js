const log = console.log.bind(console)

var compareVersion = function (version1, version2) {
    var arr1 = version1.split(".")
    var arr2 = version2.split(".")
    var length = Math.max(arr1.length, arr2.length)
    for (var i = 0; i < length; i++) {
        if ((parseInt(arr1[i]) || 0) > (parseInt(arr2[i]) || 0)) {
            return 1
        } else if ((parseInt(arr1[i]) || 0) < (parseInt(arr2[i]) || 0)) {
            return -1
        }
    }
    return 0
}

// log(compareVersion("7.5.2.4", "7.5.3"))
// log(compareVersion("1.0.1", "1"))
// log(compareVersion("0.1", "1.1"))
log(compareVersion("01", "1"))
