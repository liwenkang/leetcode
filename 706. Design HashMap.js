/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.map = []
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    // 默认没有
    var flag = true
    for (var i = 0; i < this.map.length; i++) {
        if (this.map[i][0] === key) {
            // 更新
            this.map[i][1] = value
            // 发现有...
            flag = false
        }
    }
    if (flag) {
        this.map.push([key, value])
    }
}

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    for (var i = 0; i < this.map.length; i++) {
        if (this.map[i][0] === key) {
            // 更新
            return this.map[i][1]
            // 发现有...
        }
    }
    return -1
}

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    for (var i = 0; i < this.map.length; i++) {
        if (this.map[i][0] === key) {
            // 更新
            this.map.splice(i, 1)
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */