/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [-1];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            // 大处理
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        } else {
            stack.push(i);
        }
        console.log('stack', stack)
    }
    return max;
};

// console.log(longestValidParentheses('(()') === 2);
console.log(longestValidParentheses(')()())') === 4);
// console.log(longestValidParentheses('(()))(()') === 4);
// console.log(longestValidParentheses('(((()') === 2);
// console.log(longestValidParentheses(')(())(()()))(') === 10);
// console.log(longestValidParentheses(')(((((()())()()))()(()))(') === 22);
