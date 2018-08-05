const log = console.log.bind(console)


var arr = [3, 5, 2, 7, 8, 1, 4, 9]
arr.reduce(function (memo, value, index, array) {
    return (memo * index + value) / array.length
}, 0)

var a = 2

if (true) {
    console.log(a)
    let b = 3
    console.log(a)
}

