// 内存问题

var log = console.log.bind(console)

var maxDif = function (arr) {
    // 获取数组中的最大差值
    var maxNum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] > maxNum) {
            maxNum = arr[i + 1] - arr[i];
        }
    }
    return Math.floor(maxNum / 2);
}

var range = function (arr) {
    arr = arr.sort()
    log('arr',arr)
    var str = "数组为: "
    // var result = [];
    var minNum = arr[0];
    var maxNum = arr[arr.length - 1];
    for (var i = minNum; i <= maxNum; i++) {
        // result.push(i);
        str += i
    }
    log(str)
    return str;
}

var findRadius = function (houses, heaters) {

    // 因为要考虑所有房子都被温暖到,所以,第一个房子数组,就该是从1 ~ 结尾
    houses = range(houses);

    // 0. 假设最小距离是 0
    var minDistance = 0;

    if (heaters.length === 1) {
        // log("只有一个炉子")
        // 先是两种极端情况
        if (heaters[0] > houses[houses.length - 1]) {
            // 房房房 炉
            minDistance = heaters[0] - houses[0];
            // log(minDistance);
            return minDistance;
        } else if (heaters[heaters - 1] < houses[0]) {
            // 炉 房房房
            minDistance = houses[houses.length - 1] - heaters[0];
            // log(minDistance);
            return minDistance;
        } else {
            // 房房 炉 房
            if (heaters[0] - houses[0] > houses[houses.length - 1] - heaters[0]) {
                minDistance = heaters[0] - houses[0];
                // log(minDistance);
                return minDistance;
            } else {
                minDistance = houses[houses.length - 1] - heaters[0];
                // log(minDistance);
                return minDistance;
            }
        }
    } else {
        // log("有多个炉子");
        // 炉子数量多于 2
        // 1. 炉子都在房子左边
        // 炉炉炉 房房房
        if (heaters[heaters.length - 1] <= houses[0]) {
            // log("1. 炉炉炉 房房房");
            minDistance = houses[houses.length - 1] - heaters[heaters.length - 1];
            // log(minDistance);
            return minDistance;
        }

        // 5. 房房房 炉炉炉
        if (heaters[0] > houses[houses.length - 1]) {
            // log("5. 房房房 炉炉炉")
            minDistance = heaters[0] - houses[0];
            // log(minDistance)
            return minDistance;
        }

        // 3. 炉子都在房子里
        // 房房房房房房房 炉 房房房 炉 房房房房房房房房房房房
        // *              *         *                      *
        if (heaters[0] >= houses[0] && heaters[heaters.length - 1] <= houses[houses.length - 1]) {
            // 如果出现重复的值,也无所谓,反正取的是差值
            // log("3. 房房房房房房房 炉 房房房 炉 房房房房房房房房房房房")
            minDistance = maxDif(heaters);

            if (heaters[0] - houses[0] > minDistance) {
                minDistance = heaters[0] - houses[0];
            }

            if (houses[houses.length - 1] - heaters[heaters.length - 1] > minDistance) {
                minDistance = houses[houses.length - 1] - heaters[heaters.length - 1];
            }
            // log(minDistance)
            return minDistance;
        }

        // 除了极端的情况,其它都是 计算标记点之间最大的距离是多少
        // 2. 炉子在房子左边和房子里
        // 炉炉炉炉炉 房房 炉 房房房房炉房房房
        //         *       *          *     *
        if (heaters[0] <= houses[0] && houses[houses.length - 1] >= heaters[heaters.length - 1]) {
            // log("2. 炉炉炉炉炉 房房 炉 房房房房炉房房房")
            // 取到房子左边的炉子
            var arr = [];
            var array = [];
            for (var i = heaters[0]; i < heaters.length; i++) {
                if (heaters[i] <= houses[0]) {
                    arr.push(heaters[i]);
                } else {
                    array.push(heaters[i]);
                }
            }
            var leftHeater = arr[arr.length - 1];
            array.unshift(leftHeater);
            // 取出 midHeater 中最大差值
            minDistance = maxDif(array);

            if (minDistance < houses[houses.length - 1] - heaters[heaters.length - 1]) {
                minDistance = houses[houses.length - 1] - heaters[heaters.length - 1];
            }
            // log(minDistance)
            return minDistance;
        }


        // 4. 炉子都在房子右边和房子里
        // 1   2  3  4  5  6  7  8
        // 房 房 房 房 房 房 房  房
        // 1   2  3  4  5  6  7  8  9
        //       炉    炉           炉
        // [3,5,9]
        // *     *      *           *

        // [1,3,5,8,15]
        // 3 和 1 之间直接减
        // 5 和 3 减后初二取整

        // 8 和 5 直接减

        // 15 和 8 直接减
        if (houses[0] <= heaters[0] && houses[houses.length - 1] <= heaters[heaters.length - 1]) {
            log("4. 房房房房房 炉 房房房 炉 房房房房 炉炉炉炉炉炉炉炉")
            var arr = [];
            var array = [];
            for (var i = 0; i < heaters.length; i++) {
                if (heaters[i] < houses[houses.length - 1]) {
                    arr.push(heaters[i]);
                } else {
                    array.push(heaters[i]);
                }
            }
            minDistance = maxDif(arr);
            var rightHeater = array[0];
            var rightHouse = houses[houses - 1];
            if (arr[0] - houses[0] > minDistance) {
                // 左边是必需照顾到
                minDistance = arr[0] - houses[0];
            }

            if (houses[houses.length - 1] - arr[arr.length - 1] > array[0] - houses[houses.length - 1]) {
                if (Math.floor(array[0] - arr[arr.length - 1]) / 2 > minDistance) {
                    minDistance = Math.floor(array[0] - arr[arr.length - 1]) / 2;
                }
            } else {
                if (houses[houses.length - 1] - arr[arr.length - 1] > minDistance) {
                    minDistance = houses[houses.length - 1] - arr[arr.length - 1];
                }
            }
            // log('minDistance', minDistance);
            return minDistance;
        }


        // 5. 炉子在房子 左, 中 , 右
        // 炉炉炉炉  房房房房房 炉 房房房 炉 房房房房 炉炉炉炉炉炉炉炉
        //       *              *         *           *
        if (heaters[0] <= houses[0] && heaters[heaters.length - 1] >= houses[houses.length - 1]) {
            log('5. 炉子在房子 左, 中 , 右')
            var leftArr = [];
            var midArr = [];
            var rightArr = [];
            for (var i = 0; i < heaters.length; i++) {
                if (heaters[i] < houses[0]) {
                    leftArr.push(heaters[i]);
                } else if (heaters[i] > houses[houses.length - 1]) {
                    rightArr.push(heaters[i]);
                } else {
                    midArr.push(heaters[i]);
                }
            }
            var leftHeater = leftArr[leftArr.length - 1];
            var rightHeater = rightArr[0];
            minDistance = maxDif(midArr);
            if (midArr[0] - houses[0] > houses[0] - leftHeater) {
                if (houses[0] - leftHeater > minDistance) {
                    minDistance = houses[0] - leftHeater;
                }
            } else {
                if (midArr[0] - houses[0] > minDistance) {
                    minDistance = midArr[0] - houses[0];
                }
            }

            if (rightHeater - houses[houses.length - 1] > houses[houses.length - 1] - midArr[midArr.length - 1]) {
                if (houses[houses.length - 1] - midArr[midArr.length - 1] > minDistance) {
                    minDistance = houses[houses.length - 1] - midArr[midArr.length - 1];
                }
            } else {
                if (rightHeater - houses[houses.length - 1] > minDistance) {
                    minDistance = rightHeater - houses[houses.length - 1];
                }
            }

            // log(minDistance)
            return minDistance;
        }
    }
};

// houses / heaters
// findRadius([2, 3, 4], [1])
// findRadius([2, 3, 4], [5])
// findRadius([3, 4], [1, 2])

// 房房房房房房房房房房房房
//       炉      炉      炉炉炉炉炉炉炉炉
// *     *       *        *
// [1,4,8,12]
// findRadius([1, 8], [3, 5, 9])

// findRadius([3, 4, 5, 6], [1, 2, 4, 7, 8])
// findRadius([1, 2, 3, 4], [2, 5, 6, 7])
// findRadius([282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923], [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612])


range([
    282475249,
    622650073,
    984943658,
    144108930,
    470211272,
    101027544,
    457850878,
    458777923]
)