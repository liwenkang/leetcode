const log = console.log.bind(console)

const sqrtNum = function (num) {
    // 牛顿方法
    var result = num
    let count = 0

    while (Math.abs(result * result - num) > 0.000000000001) {
        count++
        result = (result + num / result) / 2
    }

    log("结果:", result)
    log("循环次数:", count)
}

function plot3D(f, factor = 1, step = 0.1, xstart = -2 * Math.PI, xend = 2 * Math.PI, ystart = xstart, yend = xend) {
    for (var i = xstart; i < xend; i += step) {
        for (var j = ystart; y < yend; y += step) {
            var k = f(i, j)
            document.write(`
                    <span class="dot" style="transform: translate3d(${i * factor}px,${j * factor}px,${k * factor}px)"></span>
                `)
        }
    }
}