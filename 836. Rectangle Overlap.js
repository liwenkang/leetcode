const log = console.log.bind(console)

var isRectangleOverlap = function (rec1, rec2) {
    // 两个矩形相交 [x1, y1, x2, y2]
    var x1 = rec1[0]
    var x2 = rec1[2]
    var x3 = rec2[0]
    var x4 = rec2[2]
    var y1 = rec1[1]
    var y2 = rec1[3]
    var y3 = rec2[1]
    var y4 = rec2[3]
    return x1 < x4 && x3 < x2 && y1 < y4 && y3 < y2
}

isRectangleOverlap([7, 8, 13, 15], [10, 8, 12, 20])