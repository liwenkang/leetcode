const log = console.log.bind(console)

var swap = function (arr, i, j) {
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    return arr.slice()
}

var reorganizeString = function (S) {

}

log(reorganizeString("vdjvevvvs"))
// "lblflxl"