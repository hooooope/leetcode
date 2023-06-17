/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
// 优先队列
class Heap<T = any> {
  heap: T[] = [];
  // a为child，b为parent
  // 若parent需要和child交换则返回true，否则返回false
  constructor(private compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(value: T) {
    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.heap.pop()!;
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return max;
  }

  heapifyUp() {
    let currentIndex = this.size - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.compare(this.heap[currentIndex], this.heap[parentIndex])) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.size) {
      let largestIndex = currentIndex;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      if (
        leftChildIndex < this.size &&
        this.compare(this.heap[leftChildIndex], this.heap[currentIndex])
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.compare(this.heap[rightChildIndex], this.heap[largestIndex])
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[largestIndex]] = [
          this.heap[largestIndex],
          this.heap[currentIndex],
        ];
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }
}
function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  const ret: number[] = new Array(n - k + 1);
  const pq = new Heap<[number, number]>((a, b) => a[1] > b[1]);
  for (let i = 0; i < k; i++) {
    pq.add([i, nums[i]]);
  }
  ret[0] = pq.peek()[1];
  for (let i = 0; i < n - k; i++) {
    pq.add([i + k, nums[i + k]]);
    while (pq.peek()[0] < i + 1) {
      pq.poll();
    }
    ret[i + 1] = pq.peek()[1];
  }
  return ret;
}

// 单调队列
/* function maxSlidingWindow(nums: number[], k: number): number[] {
  const ret: number[] = new Array(nums.length - k + 1).fill(0);
  let index = 0;
  // 双端队列，存放数组元素的索引，并且保证数组元素单调递减
  const dbQueue: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // 保证队列中索引对应的数组元素单调递减
    while (dbQueue.length && nums[dbQueue[dbQueue.length - 1]] <= nums[i]) {
      dbQueue.pop();
    }
    dbQueue.push(i);
    // 移除过期的索引
    if (dbQueue[0] === i - k) {
      dbQueue.shift();
    }
    // 形成窗口，记录当前窗口的最大值
    if (i >= k - 1) {
      ret[index++] = nums[dbQueue[0]];
    }
  }
  return ret;
} */

// 单调队列
/* function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  const q: number[] = [];
  for (let i = 0; i < k; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
  }
  const ret: number[] = [];
  ret.push(nums[q[0]]);
  for (let i = k; i < n; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    while (q[0] <= i - k) {
      q.shift();
    }
    ret.push(nums[q[0]]);
  }
  return ret;
} */

// 分块+预处理
/* function maxSlidingWindow(nums: number[], k: number): number[] {
  const n = nums.length;
  // 将数组nums从左到右按照k个一组进行分组，最后一组中元素的数量可能会不足k个
  // prefixMax[i]表示下标i对应的分组中，以i结尾的前缀最大值
  const prefixMax = new Array(n).fill(0);
  // suffixMax[i]表示下标i对应的分组中，以i开始的后缀最大值
  const suffixMax = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (i % k === 0) {
      prefixMax[i] = nums[i];
    } else {
      prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1 || (i + 1) % k === 0) {
      suffixMax[i] = nums[i];
    } else {
      suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
    }
  }
  const ret: number[] = [];
  for (let i = 0; i < n - k + 1; i++) {
    ret.push(Math.max(suffixMax[i], prefixMax[i + k - 1]));
  }
  return ret;
} */
// @lc code=end
