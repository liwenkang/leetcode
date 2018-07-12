var simplifyPath = function (path) {
    var arr = path.split("/")
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "." || arr[i] === "") {
            arr.splice(i, 1)
            i--
        } else if (arr[i] === "..") {
            if (i - 1 >= 0) {
                arr.splice(i - 1, 2)
                i -= 2
            } else {
                arr.splice(i, 1)
                i--
            }
        }
    }
    return "/" + arr.join("/")
};