/*
 * @lc app=leetcode.cn id=1792 lang=typescript
 *
 * [1792] 最大平均通过率
 */

// @lc code=start
function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const pq = new MaxPriorityQueue({
    priority: (el: [number, number]) => {
      const pass = el[0];
      const total = el[1];
      return (pass + 1) / (total + 1) - pass / total;
    },
  });
  for (const c of classes) {
    pq.enqueue(c);
  }
  for (let i = 0; i < extraStudents; i++) {
    const [pass, total] = pq.dequeue()["element"];
    pq.enqueue([pass + 1, total + 1]);
  }
  let ret = 0;
  for (let i = 0; i < classes.length; i++) {
    const [pass, total] = pq.dequeue()["element"];
    ret += pass / total;
  }
  return ret / classes.length;
}
// @lc code=end
