const log = console.log.bind(console)

/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    var w = Math.ceil(Math.sqrt(area))
    for (var i = w; i <= area; i++) {
        if (area % i === 0) {
            log([i, area / i])
            return [i, area / i]
        }
    }
}

constructRectangle(8)