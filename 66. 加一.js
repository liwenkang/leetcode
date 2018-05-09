var log = console.log.bind(console)

/**
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 */

var plusOne = function (di1gits) {
    var i = 1
    di1gits[di1gits.length - 1] = parseInt(di1gits[di1gits.length - 1] + 1)
    while (di1gits[di1gits.length - i] === 10) {
        if (di1gits[di1gits.length - i - 1] !== undefined) {
            di1gits[di1gits.length - i - 1] = parseInt(di1gits[di1gits.length - i - 1] + 1)
            i++
        }else {
            for (var i = 1; i < di1gits.length; i++) {
                if (di1gits[i] === 10) {
                    di1gits[i] = 0
                }
            }
            if (di1gits[0] === 10) {
                di1gits[0] = 0
                di1gits.unshift(1)
            }
            // log('di1gits',di1gits)
            return di1gits
        }
    }

    for (var i = 1; i < di1gits.length; i++) {
        if (di1gits[i] === 10) {
            di1gits[i] = 0
        }
    }
    if (di1gits[0] === 10) {
        di1gits[0] = 0
        di1gits.unshift(1)
    }
    // log('di1gits',di1gits)
    return di1gits
};

plusOne([1,9,9,9,9,9])
plusOne([8,9,9,9,9,9])
plusOne([9,9,9,9,9,9])
plusOne([8,9,9,9,9,8])