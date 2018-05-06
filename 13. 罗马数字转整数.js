var log = console.log.bind(console)

/**
 * @param {string} s
 * @return {number}
 * "MCMXCIV"
 */
var romanToInt = function (s) {
    var str = s
    var num = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "M" && str[i - 1] + str[i] !== "CM") {
            num += 1000
        }


        if (str[i] + str[i + 1] === "CM") {
            num += 900
        }
        if (str[i] === "D" && str[i - 1] + str[i] !== "CD") {
            num += 500
        }
        if (str[i - 1] + str[i] === "CD") {
            num += 400
        }
        if (str[i] === "C" && str[i] + str[i + 1] !== "CD" && str[i] + str[i + 1] !== "CM" && str[i - 1] + str[i] !== "XC") {
            num += 100
        }


        if (str[i] + str[i + 1] === "XC") {
            num += 90
        }
        if (str[i] === "L" && str[i - 1] + str[i] !== "XL") {
            num += 50
        }
        if (str[i - 1] + str[i] === "XL") {
            num += 40
        }
        if (str[i] === "X" && str[i] + str[i + 1] !== "XL" && str[i] + str[i + 1] !== "XC" && str[i - 1] + str[i] !== "IX") {
            num += 10
        }


        if (str[i] + str[i + 1] === "IX") {
            num += 9
        }
        if (str[i] === "V" && str[i - 1] + str[i] !== "IV") {
            num += 5
        }
        if (str[i - 1] + str[i] === "IV") {
            num += 4
        }
        if (str[i] === "I" && str[i] + str[i + 1] !== "IV" && str[i] + str[i + 1] !== "IX") {
            num += 1
        }
    }
    return num
};

romanToInt("M CM XC IV")
1000 + 900 + 90