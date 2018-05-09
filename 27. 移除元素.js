var log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var arr = nums
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            arr.splice(i, 1)
            i--
        }
    }
    // log(arr)
    return arr.length
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)

