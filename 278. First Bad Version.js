const log = console.log.bind(console)
/*
*
* Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
*/

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var left = 1
        var right = n
        while (left < right) {
            var mid = left + Math.floor((right - left) / 2)
            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}