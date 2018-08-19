const log = console.log.bind(console)

/*
* MyStack stack = new MyStack();

stack.push(1);
stack.push(2);
[1,2]
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
*/

var MyStack = function() {
    this.stack = []
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0
};