/*
 * @lc app=leetcode.cn id=1046 lang=typescript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
// https://github.com/datastructures-js/priority-queue
function lastStoneWeight(stones: number[]): number {
  const pq = new MaxPriorityQueue();
  for (const stone of stones) {
    pq.enqueue("x", stone);
  }
  while (pq.size() > 1) {
    const a = pq.dequeue()["priority"];
    const b = pq.dequeue()["priority"];
    if (a > b) {
      pq.enqueue("x", a - b);
    }
  }
  return pq.isEmpty() ? 0 : pq.dequeue()["priority"];
}
// @lc code=end
