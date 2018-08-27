const log = console.log.bind(console)
/**
 I             1
 V             5
 X             10
 L             50
 C             100
 D             500
 M             1000
 */

// Input: 1994
// Output: "MCMXCIV"

var intToRoman = function (num) {
    var arr = num.toString().split("")
    var result = ""
    var one = parseInt(arr.pop() || 0)
    var two = parseInt(arr.pop() || 0)
    var three = parseInt(arr.pop() || 0)
    var four = parseInt(arr.pop() || 0)

    // 先判断最高位
    result += "M".repeat(four)

    if (three === 9) {
        result += "CM"
    } else if (three === 8) {
        result += "DCCC"
    } else if (three === 7) {
        result += "DCC"
    } else if (three === 6) {
        result += "DC"
    } else if (three === 5) {
        result += "D"
    } else if (three === 4) {
        result += "CD"
    } else if (three === 3) {
        result += "CCC"
    } else if (three === 2) {
        result += "CC"
    } else if (three === 1) {
        result += "C"
    }


    if (two === 9) {
        result += "XC"
    } else if (two === 8) {
        result += "LXXX"
    } else if (two === 7) {
        result += "LXX"
    } else if (two === 6) {
        result += "LX"
    } else if (two === 5) {
        result += "L"
    } else if (two === 4) {
        result += "XL"
    } else if (two === 3) {
        result += "XXX"
    } else if (two === 2) {
        result += "XX"
    } else if (two === 1) {
        result += "X"
    }

    if (one === 9) {
        result += "IX"
    } else if (one === 8) {
        result += "VIII"
    } else if (one === 7) {
        result += "VII"
    } else if (one === 6) {
        result += "VI"
    } else if (one === 5) {
        result += "V"
    } else if (one === 4) {
        result += "IV"
    } else if (one === 3) {
        result += "III"
    } else if (one === 2) {
        result += "II"
    } else if (one === 1) {
        result += "I"
    }
    return result
}
intToRoman(1994)