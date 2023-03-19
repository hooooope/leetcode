/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
// 优先队列
/* function maxSlidingWindow(nums: number[], k: number): number[] {
  const ret: number[] = new Array(nums.length - k + 1).fill(0);
  // leetcode内置优先队列为：@datastructures-js/priority-queue-v4.1.0
  // 该版本不支持在构造函数中传入比较函数
  // 因此使用hack的priority值进行比较
  // 原本意义的比较函数
  // const compare = (a: [number, number], b: [number, number]) => {
  //   // 当元素值不同时，按元素值降序排序
  //   // 当元素值相同时，按索引值降序排序
  //   return a[0] !== b[0] ? b[0] - a[0] : b[1] - a[1];
  // };
  const pq = new MaxPriorityQueue({
    priority: (el: [number, number]) => {
      return el[0] * 100000 + el[1];
    },
  });
  for (let i = 0; i < k; i++) {
    pq.enqueue([nums[i], i]);
  }
  ret[0] = pq.front()["element"][0];
  for (let i = k; i < nums.length; i++) {
    pq.enqueue([nums[i], i]);
    // 移除过期的元素
    while (pq.front()["element"][1] <= i - k) {
      pq.dequeue();
    }
    ret[i - k + 1] = pq.front()["element"][0];
  }
  return ret;
} */

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
function maxSlidingWindow(nums: number[], k: number): number[] {
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
}

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
