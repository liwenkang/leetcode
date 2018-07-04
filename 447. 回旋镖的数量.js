const log = console.log.bind(console)

/**
 * @param {number[][]} points
 * @return {number}
 * [[0,0],[1,0],[2,0]]
 * 最少 3 個點, 最多500 個點
 */

var countDistance = function (x1, y1, x2, y2) {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2
}

var numberOfBoomerangs = function (points) {
    var count = 0
    var result = []
    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            for (var k = j + 1; k < points.length; k++) {
                let ix = points[i][0]
                let iy = points[i][1]
                let jx = points[j][0]
                let jy = points[j][1]
                let kx = points[k][0]
                let ky = points[k][1]

                // j=>i
                // k=>i
                var jToiDistance = countDistance(jx, jy, ix, iy)
                var kToiDistance = countDistance(kx, ky, ix, iy)

                // i=>j
                // k=>j
                var iTojDistance = countDistance(ix, iy, jx, jy)
                var kTojDistance = countDistance(kx, ky, jx, jy)


                // i=>k
                // j=>k
                var iTokDistance = countDistance(ix, iy, kx, ky)
                var jTokDistance = countDistance(jx, jy, kx, ky)

                if (jToiDistance === kToiDistance) {
                    count += 2
                }
                if (iTojDistance === kTojDistance) {
                    count += 2
                }
                if (iTokDistance === jTokDistance) {
                    count += 2
                }
            }
        }
    }
    return count
}


numberOfBoomerangs([[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]])