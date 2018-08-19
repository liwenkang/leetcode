const log = console.log.bind(console)

/*
* [1,2,3,4],[1,4]
* */

var findRadius = function (houses, heaters) {
    var arr = []
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    for (var i = 0; i < houses.length; i++) {
        // 找到每个house 到 heaters 的距离
        var house = houses[i]
        var min = Infinity
        for (var j = 0; j < heaters.length; j++) {
            var heater = heaters[j]
            var distance = Math.abs(house - heater)
            if(distance < min) {
                min = distance
            }
        }
        arr.push(min)
    }
    return Math.max(...arr)
}

findRadius([1, 2, 3, 4], [1, 4])