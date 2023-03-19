/*
 * @lc app=leetcode.cn id=1353 lang=typescript
 *
 * [1353] 最多可以参加的会议数目
 */

// @lc code=start
/* function maxEvents(events: number[][]): number {
  // 记录参加会议的日期
  const set = new Set<number>();
  // 按会议结束日期升序排序
  events.sort((a, b) => a[1] - b[1]);
  // 若会议结束时间是单调递增的（没有出现相等的情况）
  // 则直接返回所有会议数量
  let flag = true;
  for (let i = 1; i < events.length; i++) {
    if (events[i - 1][1] >= events[i][1]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return events.length;
  }
  for (const [startDay, endDay] of events) {
    for (let i = startDay; i <= endDay; i++) {
      if (!set.has(i)) {
        set.add(i);
        break;
      }
    }
  }
  return set.size;
} */

function maxEvents(events: number[][]): number {
  // 最多有10^5个会议
  const MAX = 1e5 + 1;
  // start[i]：存放开始时间为i的所有会议下标
  const start: number[][] = new Array(MAX).fill(0).map(() => new Array());
  for (const [index, event] of events.entries()) {
    start[event[0]].push(index);
  }
  /* const queue = new MinPriorityQueue({
    priority: (endDay: number) => endDay,
  }); */
  let ret = 0;
  // 小根堆存放所有开始日期等于当前日期的会议
  const queue = new MinPriorityQueue();
  // i为当前日期
  for (let i = 1; i < MAX; i++) {
    for (let j = 0; j < start[i].length; j++) {
      queue.enqueue(events[start[i][j]][1]);
    }
    // 移除过期（结束日期小于当前日期）的会议
    while (queue.size() && queue.front()["element"] < i) {
      queue.dequeue();
    }
    // 参加会议
    if (queue.size()) {
      queue.dequeue();
      ret++;
    }
  }
  return ret;
}
// @lc code=end
