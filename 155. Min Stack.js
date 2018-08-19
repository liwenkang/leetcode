var MinStack = function () {
    this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    var min = Infinity
    for(var i = 0; i < this.stack.length; i++) {
        if(this.stack[i] < min) {
            min = this.stack[i]
        }
    }
    return min
};