/*
 * @lc app=leetcode.cn id=2462 lang=typescript
 *
 * [2462] 雇佣 K 位工人的总代价
 */

// @lc code=start
class HPriorityQueue<T = any> {
  queue: T[] = [];
  constructor(private compare: (a: T, b: T) => boolean) {}

  offer(v: T) {
    this.queue.push(v);
    this.heapifyUp();
  }

  poll() {
    if (this.queue.length === 0) {
      return null;
    }
    if (this.queue.length === 1) {
      return this.queue.pop()!;
    }
    const ret = this.queue[0];
    this.queue[0] = this.queue.pop()!;
    this.heapifyDown();
    return ret;
  }

  heapifyUp() {
    let currentIndex = this.queue.length - 1;
    while (currentIndex >= 0) {
      const parentIndex = (currentIndex - 1) >> 1;
      if (this.compare(this.queue[parentIndex], this.queue[currentIndex])) {
        [this.queue[parentIndex], this.queue[currentIndex]] = [
          this.queue[currentIndex],
          this.queue[parentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.queue.length) {
      let leastIndex = currentIndex;
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      if (
        leftChildIndex < this.queue.length &&
        this.compare(this.queue[leastIndex], this.queue[leftChildIndex])
      ) {
        leastIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.queue.length &&
        this.compare(this.queue[leastIndex], this.queue[rightChildIndex])
      ) {
        leastIndex = rightChildIndex;
      }
      if (leastIndex !== currentIndex) {
        [this.queue[leastIndex], this.queue[currentIndex]] = [
          this.queue[currentIndex],
          this.queue[leastIndex],
        ];
        currentIndex = leastIndex;
      } else {
        break;
      }
    }
  }
}
function totalCost(costs: number[], k: number, candidates: number): number {
  let ret = 0;
  const n = costs.length;
  if (candidates * 2 >= n) {
    costs.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
      ret += costs[i];
    }
    return ret;
  }
  const queue = new HPriorityQueue<number>((a, b) => {
    return costs[a] !== costs[b] ? costs[a] > costs[b] : a > b;
  });
  for (let i = 0; i < candidates; i++) {
    queue.offer(i);
    queue.offer(n - 1 - i);
  }
  for (let l = candidates, r = n - 1 - candidates; k > 0; k--) {
    const i = queue.poll()!;
    ret += costs[i];
    if (l <= r) {
      queue.offer(i < l ? l++ : r--);
    }
  }
  return ret;
}
// @lc code=end
