var mctFromLeafValuesGreedy = function(arr) {
    let cost = 0;
    while (arr.length > 1) {
        let minProduct = Number.MAX_VALUE;

        let minId = -1;
        for (let i = 0; i < arr.length - 1; i++) {
            let curProduct = arr[i] * arr[i + 1];
            if (curProduct < minProduct) {
                minProduct = curProduct; // 8
                minId = arr[i] < arr[i + 1] ? i : i + 1; // 1
            }
        }
        cost += minProduct; // 8
        arr.splice(minId, 1); //
    }
    return cost;
};

mctFromLeafValuesGreedy([6, 2, 4]);
