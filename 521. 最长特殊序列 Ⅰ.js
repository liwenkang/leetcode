const log = console.log.bind(console)

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a.length > b.length) {
        return a.length
    }else if(b.length > a.length) {
        return b.length
    }else {
        // 长度相等
        if(a === b) {
            //
            return -1
        }else {
            // 长度相等,还不相同
            return a.length
        }
    }
};