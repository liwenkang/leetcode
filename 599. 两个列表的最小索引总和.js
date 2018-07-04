const log = console.log.bind(console)

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 * 输入:
 ["Shogun", "Tapioca Express", "Burger King", "KFC"]
 ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
 输出: ["Shogun"]
 解释: 他们唯一共同喜爱的餐厅是“Shogun”。
 */
var findRestaurant = function (list1, list2) {
    var result = []
    var count = Infinity
    for (var i = 0; i < list1.length; i++) {
        for (var j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                if (i + j < count) {
                    count = i + j
                    result.push(list1[i])
                } else if (i + j === count) {
                    result.push(list1[i])
                }
            }
        }
    }
    return result
}

findRestaurant(["Shogun", "KFC", "Burger King"],
    ["KFC", "Shogun", "Hungry Hunter Steakhouse"])