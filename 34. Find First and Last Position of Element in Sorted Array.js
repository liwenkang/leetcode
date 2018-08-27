const log = console.log.bind(console)

var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};