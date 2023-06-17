/*
 * @lc app=leetcode.cn id=1054 lang=typescript
 *
 * [1054] 距离相等的条形码
 */

// @lc code=start
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

// 大根堆
/* function rearrangeBarcodes(barcodes: number[]): number[] {
  const count = new Map<number, number>();
  for (const b of barcodes) {
    count.set(b, (count.get(b) ?? 0) + 1);
  }
  const pq = new Heap<[number, number]>((a, b) => a[0] > b[0]);
  for (const [k, v] of count) {
    pq.add([v, k]);
  }
  const n = barcodes.length;
  const ret: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const [cx, x] = pq.poll()!;
    if (i === 0 || ret[i - 1] !== x) {
      ret[i] = x;
      if (cx > 1) {
        pq.add([cx - 1, x]);
      }
    } else {
      const [cy, y] = pq.poll()!;
      ret[i] = y;
      if (cy > 1) {
        pq.add([cy - 1, y]);
      }
      pq.add([cx, x]);
    }
  }
  return ret;
} */

// 计数统计
function rearrangeBarcodes(barcodes: number[]): number[] {
  const n = barcodes.length;
  if (n < 2) {
    return barcodes;
  }
  const counts = new Map<number, number>();
  let maxCount = 0;
  for (const b of barcodes) {
    counts.set(b, (counts.get(b) ?? 0) + 1);
    maxCount = Math.max(maxCount, counts.get(b)!);
  }
  let evenIndex = 0;
  let oddIndex = 1;
  let halfLength = n >> 1;
  const ret: number[] = new Array(n).fill(0);
  for (let [x, count] of counts) {
    while (count > 0 && count <= halfLength && oddIndex < n) {
      ret[oddIndex] = x;
      count--;
      oddIndex += 2;
    }
    while (count > 0) {
      ret[evenIndex] = x;
      count--;
      evenIndex += 2;
    }
  }
  return ret;
}
// @lc code=end
