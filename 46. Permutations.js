const log = console.log.bind(console)

var permute = function (nums) {
    if (nums.length === 1) {
        return [nums]
    }
    var result = []
    nums.forEach(num => permute(nums.filter(e => e !== num)).forEach(arr => result.push([num, ...arr])))
    return result
}


log(permute([0, 1, 2]))
