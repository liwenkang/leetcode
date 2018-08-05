const log = console.log.bind(console)

function negate(fn) {
    return function (...args) {
        return !fn(...args)
    }
}