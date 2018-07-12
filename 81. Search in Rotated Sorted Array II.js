const log = console.log.bind(console)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    return nums.includes(target)
}

log(search([2, 5, 6, 0, 0, 1, 2], 0))