const log = console.log.bind(console)
/*
*
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

PAYP
AL
ISHIR
IN
G

P     I    N
A   L S  I G
Y A   H R
P     I

*/
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }
    var arr = []
    for (var i = 0; i < s.length;) {
        arr.push(s.slice(i, i + numRows))
        arr.push(s.slice(i + numRows, i + numRows + numRows - 2))
        i = i + numRows + numRows - 2
    }
    var out = ""
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            arr[i] = " ".repeat(numRows - arr[i].length - 1) + arr[i].split("").reverse().join("")
        }
    }
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 0; j < arr.length; j++) {
            out += arr[j][i] || ""
        }
    }
    out = out.replace(/ /g, "")
    return out
}

// convert("PAYPALISHIRING", 3)
// convert("PAYPALISHIRING", 4)
// convert("A", 1)
convert("ABCDEF", 4) //