const log = console.log.bind(console)

// Input: "(add 1 2)"
// Output: 3

// add +
// mult *
// let 赋值

// 未完成 let 的处理

var dict = {}

var evaluate = function (expression) {

    // 检查到 let 就把 x = 2

    var regLet = /let ((?:\w+ \d )+)/

    function f(expression) {
        if (regLet.exec(expression) !== null) {
            // 匹配到了 let
            var arr = regLet.exec(expression)
            var needReplace = arr[1]
            var dictArr = arr[1].split(" ")
            for (var i = 0; i < dictArr.length - 2; i += 2) {
                dict[dictArr[i]] = dictArr[i + 1]
            }
            expression = expression.replace(needReplace, "")
        }
        return expression
    }

    // expression = f(expression)

    log(dict)

    var regAdd = /\(add (\w+) (\w+)\)/
    var regMult = /\(mult (\w+) (\w+)\)/
    while (regAdd.exec(expression) !== null || regMult.exec(expression) !== null) {
        if (regAdd.exec(expression)) {
            var arr = regAdd.exec(expression)
            var needReplace = arr[0]    // '(mult 2 3)'

            if (dict[arr[1]] !== undefined) {
                var num1 = parseInt(dict[arr[1]])
            } else {
                var num1 = parseInt(arr[1])
            }

            if (dict[arr[2]] !== undefined) {
                var num2 = parseInt(dict[arr[2]])
            } else {
                var num2 = parseInt(arr[2])
            }
            var result = num1 + num2
            expression = expression.replace(needReplace, result)
            expression = f(expression)
        } else {
            var arr = regMult.exec(expression)
            var needReplace = arr[0]    // '(mult 2 3)'

            if (dict[arr[1]] !== undefined) {
                var num1 = parseInt(dict[arr[1]])
            } else {
                var num1 = parseInt(arr[1])
            }

            if (dict[arr[2]] !== undefined) {
                var num2 = parseInt(dict[arr[2]])
            } else {
                var num2 = parseInt(arr[2])
            }
            var result = num1 * num2
            expression = expression.replace(needReplace, result)
            expression = f(expression)
        }
    }
    log("expression", expression)

}

// evaluate("(add 1 2)")
// // Output: 3
//
// evaluate("(mult 3 (add 2 3))")
// // Output: 15
//
// evaluate("(let x 2 (mult x 5))")
// // Output: 10

// evaluate("(let x 2 (mult x (let x 3 y 4 (add x y))))")
// Output: 14

evaluate("(let x 3 x 2 x)")
// Output: 2

// evaluate("(let x 1 y 2 x (add x y) (add x y))")
//// Output: 5

// evaluate("(let x 2 (add (let x 3 (let x 4 x)) x))")
// Output: 6

// evaluate("(let a1 3 b2 (add a1 1) b2)")
// Output 4