var log = console.log.bind(console)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var str = x.toString(10)
    var result = 0
    if (x < 0) {
        result = parseInt("-" + str.split("").slice(1).reverse().join(""))
    } else {
        result = parseInt(str.split("").reverse().join(""))
    }

    if (result < (-Math.pow(2, 31)) || result > (Math.pow(2, 31) - 1)) {
        return 0
    } else {
        return result
    }
};

reverse(123)
reverse(-123)
reverse(120)