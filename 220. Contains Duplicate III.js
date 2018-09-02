const log = console.log.bind(console)

var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; Math.abs(i - j) <= k; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true
            }
        }
    }
    return false
}

log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))

