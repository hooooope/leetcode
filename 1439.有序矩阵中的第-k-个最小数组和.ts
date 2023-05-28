/*
 * @lc app=leetcode.cn id=1439 lang=typescript
 *
 * [1439] 有序矩阵中的第 k 个最小数组和
 */

// @lc code=start
class MinHeap<T = any> {
  private heap: T[] = [];
  constructor(private compare: (a: T, b: T) => boolean) {}

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
    const ret = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return ret;
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
      let leastIndex = currentIndex;
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      if (
        leftChildIndex < this.size &&
        this.compare(this.heap[leftChildIndex], this.heap[leastIndex])
      ) {
        leastIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.compare(this.heap[rightChildIndex], this.heap[leastIndex])
      ) {
        leastIndex = rightChildIndex;
      }
      if (leastIndex !== currentIndex) {
        [this.heap[leastIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[leastIndex],
        ];
        currentIndex = leastIndex;
      } else {
        break;
      }
    }
  }
}
function kthSmallest(mat: number[][], k: number): number {
  const merge = (f: number[], g: number[], k: number): number[] => {
    if (g.length > f.length) {
      return merge(g, f, k);
    }
    const pq = new MinHeap<[number, number, number]>((a, b) => a[2] < b[2]);
    for (let i = 0; i < g.length; i++) {
      pq.add([0, i, f[0] + g[i]]);
    }
    const list: number[] = [];
    while (k > 0 && pq.size !== 0) {
      const entry = pq.poll()!;
      list.push(entry[2]);
      if (entry[0] + 1 < f.length) {
        pq.add([entry[0] + 1, entry[1], f[entry[0] + 1] + g[entry[1]]]);
      }
      --k;
    }
    const ret = new Array(list.length).fill(0);
    for (let i = 0; i < list.length; i++) {
      ret[i] = list[i];
    }
    return ret;
  };
  const n = mat.length;
  let prev = mat[0];
  for (let i = 1; i < n; i++) {
    prev = merge(prev, mat[i], k);
  }
  return prev[k - 1];
}
/* const ret = kthSmallest(
  [
    [1, 2, 7, 8, 10],
    [4, 4, 5, 5, 6],
    [3, 3, 5, 6, 7],
    [2, 4, 7, 9, 9],
  ],
  7
);
console.log(ret); */
// @lc code=end
