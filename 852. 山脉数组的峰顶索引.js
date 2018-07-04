const log = console.log.bind(console)

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
    var maxNum = Math.max(...A)
    // log(A.indexOf(maxNum))
    return A.indexOf(maxNum)
}

peakIndexInMountainArray([0,2,1,0])