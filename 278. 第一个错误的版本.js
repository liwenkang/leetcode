/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return 1
        } else {
            var midNum = parseInt((1 + n) / 2)

            var arr = [1, midNum, n]

            while (arr[2] - arr[0] !== 1) {
                if (isBadVersion(arr[1])) {
                    /* true 向后追溯 */
                    arr = [arr[0], parseInt((arr[0] + midNum) / 2), midNum]
                    midNum = parseInt((arr[0] + midNum) / 2)
                } else {
                    /* false 向前追溯 */
                    arr = [midNum, parseInt((midNum + arr[2]) / 2), arr[2]]
                    midNum = parseInt((midNum + arr[2]) / 2)
                }
            }

            if (isBadVersion(arr[0])) {
                return arr[0]
            }

            if (isBadVersion(arr[2])) {
                return arr[2]
            }
        }
    };
};