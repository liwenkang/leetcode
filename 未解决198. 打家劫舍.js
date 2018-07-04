// 神他妈动态规划

var rob = function(nums) {
    var best0 = 0; // 表示没有选择当前houses
    var best1 = 0; // 表示选择了当前houses
    for (var i = 0; i < nums.length; i++) {
        var temp = best0;
        best0 = Math.max(best0, best1); // 没有选择当前 houses，那么它等于上次选择了或没选择的最大值 
        best1 = temp + nums[i];         // 选择了当前 houses，值只能等于上次没选择的 + 当前 houses 的 money
    }
    return Math.max(best0, best1);
}