/*
 * @lc app=leetcode.cn id= lang=typescript
 *
 * LCP 33.蓄水
 */

// @lc code=start
// 贪心+数学
/* function storeWater(bucket: number[], vat: number[]): number {
  let ret = Number.MAX_VALUE
  const maxK = Math.max(...vat)
  if (maxK === 0) {
    return 0
  }
  for (let k = 1; k <= maxK; k++) {
      let t = 0
      for (let i = 0; i < bucket.length; i++) {
          t += Math.max(0, Math.ceil(vat[i] / k) - bucket[i])
      }
      ret = Math.min(ret, k + t)
  }
  return ret
}; */

// 贪心+优先队列
type CompareFn<T> = (a: T, b: T) => boolean;
class MaxHeap<T = any> {
  private heap: T[] = [];
  constructor(private compareFn: CompareFn<T> = (a, b) => a > b) {}

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
      if (this.compareFn(this.heap[currentIndex], this.heap[parentIndex])) {
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
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      if (
        leftChildIndex < this.size &&
        this.compareFn(this.heap[leftChildIndex], this.heap[largestIndex])
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.compareFn(this.heap[rightChildIndex], this.heap[largestIndex])
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
function storeWater(bucket: number[], vat: number[]): number {
  const n = bucket.length;
  const pq = new MaxHeap<[number, number]>((a, b) => a[0] > b[0]);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (bucket[i] === 0 && vat[i] !== 0) {
      cnt++;
      bucket[i]++;
    }
    if (vat[i] > 0) {
      pq.add([Math.ceil(vat[i] / bucket[i]), i]);
    }
    // if vat[i] === 0, ignore
  }
  if (pq.size <= 0) {
    return 0;
  }
  let ret = Number.MAX_VALUE;
  while (cnt < ret) {
    const [v, i] = pq.poll()!;
    ret = Math.min(ret, cnt + v);
    if (v === 1) {
      break;
    }
    const t = Math.ceil(vat[i] / (v - 1));
    cnt += t - bucket[i];
    bucket[i] = t;
    pq.add([v - 1, i]);
  }
  return ret;
}

// @lc code=end
