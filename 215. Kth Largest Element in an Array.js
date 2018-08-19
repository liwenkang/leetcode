const log = console.log.bind(console)

var findKthLargest = function (nums, k) {
    return nums.sort((a,b) => b-a)[k-1]
}