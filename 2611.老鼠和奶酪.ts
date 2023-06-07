/*
 * @lc app=leetcode.cn id=2611 lang=typescript
 *
 * [2611] 老鼠和奶酪
 */

// @lc code=start
// 贪心+排序
/* function miceAndCheese(
  reward1: number[],
  reward2: number[],
  k: number
): number {
  const n = reward1.length;
  const diff: number[] = new Array(n).fill(0);
  let ret = 0;
  for (let i = 0; i < n; i++) {
    diff[i] = reward1[i] - reward2[i];
    ret += reward2[i];
  }
  diff.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    ret += diff[i];
  }
  return ret;
} */

// 贪心+优先队列
type Compare<T> = (a: T, b: T) => boolean;

class Heap<T> {
  heap: T[] = [];

  constructor(private compare: Compare<T> = (a, b) => a > b) {}

  get size() {
    return this.heap.length;
  }

  push(v: T) {
    this.heap.push(v);
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.heap.pop()!;
    }
    const ret = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return ret;
  }

  heapifyUp() {
    let currentIndex = this.size - 1;
    while (currentIndex > 0) {
      const parentIndex = (currentIndex - 1) >> 1;
      if (this.compare(this.heap[parentIndex], this.heap[currentIndex])) {
        [this.heap[parentIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[parentIndex],
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
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      if (
        leftChildIndex < this.size &&
        this.compare(this.heap[largestIndex], this.heap[leftChildIndex])
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.compare(this.heap[largestIndex], this.heap[rightChildIndex])
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== currentIndex) {
        [this.heap[largestIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[largestIndex],
        ];
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }
}

function miceAndCheese(
  reward1: number[],
  reward2: number[],
  k: number
): number {
  const n = reward1.length;
  let ret = 0;
  const pq = new Heap<number>();
  for (let i = 0; i < n; i++) {
    ret += reward2[i];
    pq.push(reward1[i] - reward2[i]);
    if (pq.size > k) {
      pq.poll();
    }
  }
  while (pq.size) {
    ret += pq.poll()!;
  }
  return ret;
}
// @lc code=end
