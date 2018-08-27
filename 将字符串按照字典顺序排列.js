const log = console.log.bind(console)
var result = ["aa", "bb"]
// 里面都是字符串相同的长度
result.sort((a, b) => {
    var index = 0
    while (index < a.length - 1 && a[index].charCodeAt() === b[index].charCodeAt()) {
        index++
    }
    return a[index].charCodeAt() - b[index].charCodeAt()
})