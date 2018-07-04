const log = console.log.bind(console)

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
    var result = 0

    var startHouse = Math.min(...houses)
    var endHouse = Math.max(...houses)

    var minWidth = 0

    if (heaters.length === 1) {
        if (heaters[0] > endHouse) {
            result = heaters[0] - startHouse
        } else if (heaters[0] >= startHouse) {
            result = Math.max(endHouse - heaters[0], heaters[0] - startHouse)
        } else {
            result = endHouse - heaters[0]
        }
    }

    var startHeater = Math.min(...heaters)
    var endHeater = Math.min(...heaters)

}

findRadius([3, 8], [1])
findRadius([3, 8], [3])
findRadius([3, 8], [5])
findRadius([3, 8], [8])
findRadius([3, 8], [10])