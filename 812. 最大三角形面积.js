const log = console.log.bind(console)

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    var maxArea = 0
    for (var i = 0; i < points.length; i++) {
        for (var j = i; j < points.length; j++) {
            for (var k = j; k < points.length; k++) {
                var a = Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2))
                var b = Math.sqrt(Math.pow(points[j][0] - points[k][0], 2) + Math.pow(points[j][1] - points[k][1], 2))
                var c = Math.sqrt(Math.pow(points[k][0] - points[i][0], 2) + Math.pow(points[k][1] - points[i][1], 2))
                var p = (a + b + c) / 2
                var area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
                if (area > maxArea) {
                    maxArea = area
                }
            }
        }
    }
    return maxArea
}

largestTriangleArea([[0, 0], [0, 1], [1, 0], [0, 2], [2, 0]])