/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
// 小根堆
/* function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const pq = new MinPriorityQueue();
  for (const [num, cnt] of map) {
    if (pq.size() < k) {
      pq.enqueue(num, cnt);
    } else if (cnt > pq.front()["priority"]) {
      pq.dequeue();
      pq.enqueue(num, cnt);
    }
  }
  const ret: number[] = [];
  for (let i = 0; i < k; i++) {
    ret.push(pq.dequeue()["element"]);
  }
  return ret;
} */

// 快速排序
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  // values[0]表示数值
  // values[1]表示词频
  const values: [number, number][] = [];
  for (const [num, cnt] of map) {
    values.push([num, cnt]);
  }
  const ret: number[] = new Array(k);
  const swap = (arr: any[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  const qsort = (
    values: [number, number][],
    start: number,
    end: number,
    ret: number[],
    retIndex: number,
    k: number
  ) => {
    const picked = Math.floor(Math.random() * (end - start + 1)) + start;
    swap(values, start, picked);
    const pivot = values[start][1];
    let index = start; // 大于等于区域的右边界
    for (let i = start + 1; i <= end; i++) {
      if (values[i][1] >= pivot) {
        swap(values, index + 1, i);
        index++;
      }
    }
    swap(values, start, index);
    if (k <= index - start) {
      qsort(values, start, index - 1, ret, retIndex, k);
    } else {
      for (let i = start; i <= index; i++) {
        ret[retIndex++] = values[i][0];
      }
      if (k > index - start + 1) {
        qsort(values, index + 1, end, ret, retIndex, k - (index - start + 1));
      }
    }
  };
  qsort(values, 0, values.length - 1, ret, 0, k);
  return ret;
}
// @lc code=end
