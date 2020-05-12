/**
 * @param {number} label
 * @return {number[]}
 */

var pathInZigZagTree = function(label) {
    var result = [label];
    while (label !== 1) {
        if (label % 2 === 0) {
            // 偶数
            var nextLabel = label / 2;
        } else {
            // 奇数
            var nextLabel = (label - 1) / 2;
        }
        result.unshift(nextLabel);
        label = nextLabel;
    }

    if (result.length % 2 === 0) {
        for (var i = 0; i < result.length; i += 2) {
            result[i] = (Math.pow(2, i) + Math.pow(2, i + 1) - 1) - result[i];
        }
    } else {
        for (var i = 1; i < result.length; i += 2) {
            result[i] = (Math.pow(2, i) + Math.pow(2, i + 1) - 1) - result[i];
        }
    }
    return result
};

pathInZigZagTree(14);
