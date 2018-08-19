const log = console.log.bind(console)

var KthLargest = function (k, nums) {
    this.k = k
    this.heap = nums.sort((a, b) => {
        return b - a
    })
}

KthLargest.prototype.add = function (val) {
    if (this.heap.length < 1) {
        this.heap.push(val)
        return val
    }
    for (var i = 0; i < this.heap.length; i++) {
        if (val > this.heap[i]) {
            this.heap.splice(i, 0, val)
            break
        }
        // 如果一直没有 break, 说明 val 比较小, 加到最后
        if (i === this.heap.length - 1) {
            this.heap.push(val)
            break
        }
    }
    return this.heap[this.k - 1]
}

KthLargest.prototype.add = function(val) {
    for(let i=0;i<l;i++){
        if(val>this.nums[i]){
            this.nums.splice(i,0,val);
            break;
        }
        if(i===l-1){
            this.nums.push(val);
            break;
        }
    }
    return this.nums[this.k-1];
};

// [[3,[5,-1]],[2],[1],[-1],[3],[4]]
// [null,-1,1,1,2,3]
var kth = new KthLargest(3, [5, -1])
log(kth.add(2))  // returns -1
log(kth.add(1))  // returns 1
log(kth.add(-1))  // returns 1
log(kth.add(3))  // returns 2
log(kth.add(4))  // returns 3