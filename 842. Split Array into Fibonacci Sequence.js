const log = console.log.bind(console)

function judgeFibonacciArray(array) {
    var reallyArray = []
    for(var i = 0; i < array.length; i++) {
        reallyArray.push(parseInt(array[i]))
    }
    for (var i = 0; i < reallyArray.length - 2; i++) {
        if (reallyArray[i] + reallyArray[i + 1] !== reallyArray[i + 2]) {
            return false
        }
    }
    return true
}

function helper(S) {

}

var splitIntoFibonacci = function (S) {
    // 切的长度应该是随机的...
    if (S.length < 3) {
        return false
    }

}
//
// splitIntoFibonacci("123456579")