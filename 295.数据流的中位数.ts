/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
// 优先队列
/* class MedianFinder {
  maxQueue: typeof MaxPriorityQueue;
  minQueue: typeof MinPriorityQueue;
  constructor() {
    this.maxQueue = new MaxPriorityQueue();
    this.minQueue = new MinPriorityQueue();
  }
  addNum(num: number): void {
    const { maxQueue, minQueue } = this;
    if (maxQueue.size() === 0 && minQueue.size() === 0) {
      maxQueue.enqueue(num);
    } else if (num > maxQueue.front()["element"]) {
      minQueue.enqueue(num);
    } else {
      maxQueue.enqueue(num);
    }
    if (Math.abs(maxQueue.size() - minQueue.size()) >= 2) {
      const long = maxQueue.size() > minQueue.size() ? maxQueue : minQueue;
      const short = long === maxQueue ? minQueue : maxQueue;
      short.enqueue(long.dequeue()["element"]);
    }
  }
  findMedian(): number {
    let ret = 0;
    const { maxQueue, minQueue } = this;
    if ((maxQueue.size() + minQueue.size()) % 2 === 0) {
      ret = (maxQueue.front()["element"] + minQueue.front()["element"]) / 2;
    } else {
      const long = maxQueue.size() > minQueue.size() ? maxQueue : minQueue;
      ret = long.front()["element"];
    }
    return ret;
  }
} */

// 优先队列（简化）
class MedianFinder {
  maxQueue: typeof MaxPriorityQueue;
  minQueue: typeof MinPriorityQueue;
  constructor() {
    // 大根堆存放数据流中数字较小的一半
    this.maxQueue = new MaxPriorityQueue();
    // 小根堆存放数据流中数字较大的一半
    this.minQueue = new MinPriorityQueue();
  }
  addNum(num: number): void {
    const { maxQueue, minQueue } = this;
    if (maxQueue.size() === 0 || num <= maxQueue.front()["element"]) {
      maxQueue.enqueue(num);
      // size相差大于等于2
      // 始终保持maxQueue为较长队列
      if (minQueue.size() + 1 < maxQueue.size()) {
        minQueue.enqueue(maxQueue.dequeue()["element"]);
      }
    } else {
      minQueue.enqueue(num);
      // 始终保持maxQueue为较长队列
      if (minQueue.size() > maxQueue.size()) {
        maxQueue.enqueue(minQueue.dequeue()["element"]);
      }
    }
  }
  findMedian(): number {
    const { maxQueue, minQueue } = this;
    if (maxQueue.size() > minQueue.size()) {
      return maxQueue.front()["element"];
    }
    return (maxQueue.front()["element"] + minQueue.front()["element"]) / 2;
  }
}

/* 
    思路二：
    维护一个有序数组
    插入时，用二分查找法将数字存放到正确的位置 O(logN)
    获取中位数时，可以根据索引直接计算中位数 O(1)
*/

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
