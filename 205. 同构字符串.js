var log = console.log.bind(console)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    arrS = s.toUpperCase().toString().split("")
    arrT = t.toUpperCase().toString().split("")
    var dict = {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "10",
        K: "11",
        L: "12",
        M: "13",
        N: "14",
        O: "15",
        P: "16",
        Q: "17",
        R: "18",
        S: "19",
        T: "20",
        U: "21",
        V: "22",
        W: "23",
        X: "24",
        Y: "25",
        Z: "26",
    }
    for (var i = 0; i < arrS.length; i++) {
        arrS[i] = dict[arrS[i]]
    }

    for (var j = 0; j < arrT.length; j++) {
        arrT[j] = dict[arrT[j]]
    }
    log(arrS)
    log(arrT)
    var newArrS = new Set(arrS)
    var newArrT = new Set(arrT)
    if (newArrS.size === newArrT.size) {
        // log("true")
        return true
    } else {
        // log("false")
        return false
    }
}

isIsomorphic("aba", "baa")
