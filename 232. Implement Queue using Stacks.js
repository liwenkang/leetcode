const log = console.log.bind(console)

// MyQueue queue = new MyQueue();
//
// queue.push(1);
// queue.push(2);
// [1,2]
// queue.peek();  // returns 1
// queue.pop();   // returns 1

// queue.empty(); // returns false

var MyQueue = function () {
    this.queue = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.queue.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.queue.shift()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.queue[0]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.queue.length === 0
}