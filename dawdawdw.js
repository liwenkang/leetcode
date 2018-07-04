const log = console.log.bind(console)


function find(x, y, history) {
    if (x === 5 && y === 5) {
        log("history", history)
        return
    }

    if (x > 5 || y > 5) {
        return
    }
    find(x + 1, y, history + "→")
    find(x, y + 1, history + "↑")
}

find(0, 0, "")







