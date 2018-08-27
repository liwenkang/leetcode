var maxArea = function (height) {
    var max = 0
    for (var i = 0; i < height.length - 1; i++) {
        for (var j = i + 1; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
        }
    }
    return max
}