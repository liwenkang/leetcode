const log = console.log.bind(console)

var hIndex = function (citations) {
    var count = 0
    var index = 1
    for (var i = citations.length - 1; i >= 0; i--) {
        if(citations[i] >= index++) {
            count++
        }
    }
    return count
};

hIndex([0,1,3,5,6])
hIndex([0])
