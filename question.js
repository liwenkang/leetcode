var log = console.log.bind(console)

var changeNum = function (x, y) {
    var newX = x + 1
    var newY = y - 1
    var flag = false
    if (newY - newX >= 50) {
        // 边界条件,超过后就停止
        if (judgeNum(newX, newY)) {
            log("遍历结束,返回true")
            log("这个时候就该强制结束程序了,并用一个标志位显示 true")
            return true
        } else {
            changeNum(newX, newY)
        }
    } else {
        // 超过边界条件了
        // log('newX', newX, 'newY', newY)
        log('遍历结束,返回false')
        log("这个时候就该强制结束程序了,并用一个标志位显示 false")
        return false
    }

    log("这句不该执行")
    log('newX', newX, 'newY', newY)
    log("----------------------------")
    return "超出边界条件了"
}

var judgeNum = function (x, y) {
    if (y - x === 99) {
        return true
    } else {
        return false
    }
}

var main = function (num0, num1) {
    var flag = false
    var x = num0
    var y = num1
    if (judgeNum(x, y)) {
        return true
    } else {
        changeNum(x, y)
    }
}

main(1, 1000)