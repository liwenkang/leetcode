const log = console.log.bind(console)

var computeArea = function (A, B, C, D, E, F, G, H) {
    // 分别计算两个矩形的面积
    var widthX = C - A
    var heightX = D - B
    var areaX = widthX * heightX

    var widthY = G - E
    var heightY = H - F
    var areaY = widthY * heightY

    // 计算两个矩形相交部分面积
    var left = Math.max(A, E)
    var right = Math.min(C, G)
    var bottom = Math.max(B, F)
    var top = Math.min(D, H)

    var area = (right - left) * (top - bottom)
    if(left > right || bottom > top) {
        area = 0
    }

    return areaX + areaY - area
}

// log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2))
log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4)) // 17