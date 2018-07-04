var deleteRepeatArr = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i].toString() === arr[j].toString()) {
                // 删掉 j
                arr.splice(j, 1)
                j--
            }
        }
    }
    return arr
}

var search = function (result, sr, sc) {
    var output = []
    for (var i = 0; i < result.length; i++) {
        if (result[i][0] === sr - 1 && result[i][1] === sc) {
            output.push(result[i])
        }
        if (result[i][0] === sr + 1 && result[i][1] === sc) {
            output.push(result[i])
        }
        if (result[i][0] === sr && result[i][1] === sc - 1) {
            output.push(result[i])
        }
        if (result[i][0] === sr && result[i][1] === sc + 1) {
            output.push(result[i])
        }
    }
    return output
}

var floodFill = function (image, sr, sc, newColor) {
    var keepSr = sr
    var keepSc = sc
    var oldColor = image[sr][sc]
    var result = []
    for (var i = 0; i < image.length; i++) {
        for (var j = 0; j < image[0].length; j++) {
            if (image[i][j] === oldColor) {
                if (i === sr && j === sc) {

                } else {
                    result.push([i, j])
                }
            }
        }
    }

    // log("result", result)

    // 根据 target 的位置 它离角落最远的差值,就是 循环的轮数
    var searchNum = Math.max(sr, image.length - sr) + Math.max(sc, image[0].length - sc)

    // log("searchNum", searchNum)

    // 总循环
    var out = []
    var lastLength = 1
    var alreadyHave = 0
    for (var n = 0; n <= searchNum - 1; n++) {
        // m = 0 第一次循环
        if (n === 0) {
            out = out.concat(search(result, sr, sc))
            lastLength = out.length  // 2
        }
        if (n >= 1) {
            var item = []
            // log("n", n, "alreadyHave",alreadyHave, "lastLength",lastLength)
            for (var m = alreadyHave; m < alreadyHave + lastLength; m++) {
                sr = out[m][0]
                sc = out[m][1]
                item = item.concat(search(result, sr, sc))
            }
            alreadyHave += lastLength // 2
            lastLength = item.length // 4
            out = out.concat(item)
        }
    }

    var shouldDrawing = deleteRepeatArr(out)

    for (var i = 0; i < shouldDrawing.length; i++) {
        image[shouldDrawing[i][0]][shouldDrawing[i][1]] = newColor
    }
    image[keepSr][keepSc] = newColor
    return image
};