/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/* class KthLargest {
  private k: number;
  private nums: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a);
  }

  add(val: number): number {
    const { k, nums } = this;
    const n = nums.length;
    let i = 0;
    while (val < nums[i]) {
      i++;
    }
    nums.splice(i, 0, val);
    return n + 1 < k ? nums[0] : nums[k - 1];
  }
} */

// 优先队列（小根堆）
class KthLargest {
  private k: number;
  private heap: MinHeap;
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.heap = new MinHeap();
    for (const num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    this.heap.offer(val);
    if (this.heap.size() > this.k) {
      this.heap.poll();
    }
    return this.heap.peek()!;
  }
}

class MinHeap {
  private data: number[];
  private comparator: (a: number, b: number) => number;
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b; // 升序比较器
    this.heapify(); // 构造小根堆
  }
  heapify() {
    const size = this.size();
    if (size < 2) {
      return;
    }
    for (let i = 1; i < size; i++) {
      this.bubbleUp(i);
    }
  }
  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }
  offer(value: number) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }
  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop()!;
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }
  bubbleUp(index: number) {
    const { data } = this;
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(data[index], data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  bubbleDown(index: number) {
    const { data } = this;
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = (index << 1) + 1;
      const rightIndex = (index << 1) + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(data[findIndex], data[leftIndex]) > 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(data[findIndex], data[rightIndex]) > 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }
  swap(index1: number, index2: number) {
    const { data } = this;
    [data[index1], data[index2]] = [data[index2], data[index1]];
  }
  size() {
    return this.data.length;
  }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
