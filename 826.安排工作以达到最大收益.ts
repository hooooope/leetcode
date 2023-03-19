/*
 * @lc app=leetcode.cn id=826 lang=typescript
 *
 * [826] 安排工作以达到最大收益
 */

// @lc code=start
/* function maxProfitAssignment(
  difficulties: number[],
  profits: number[],
  workers: number[]
): number {
  const works: [number, number][] = new Array(difficulties.length);
  for (let i = 0; i < difficulties.length; i++) {
    works[i] = [difficulties[i], profits[i]];
  }
  works.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));
  // key为工作难度
  // value为该难度工作的最高收益
  const difficulty2profit = new Map<number, number>();
  difficulty2profit.set(works[0][0], works[0][1]);
  let preDifficulty = works[0][0];
  let preProfit = works[0][1];
  for (let i = 1; i < works.length; i++) {
    const difficulty = works[i][0];
    const profit = works[i][1];
    if (difficulty !== preDifficulty && profit > preProfit) {
      preDifficulty = difficulty;
      preProfit = profit;
      difficulty2profit.set(difficulty, profit);
    }
  }
  let ret = 0;
  for (const ability of workers) {
    let currentProfit = 0;
    for (const [difficulty, profit] of difficulty2profit) {
      if (difficulty > ability) {
        break;
      }
      currentProfit = profit;
    }
    ret += currentProfit;
  }
  return ret;
} */

// 双指针
function maxProfitAssignment(
  difficulties: number[],
  profits: number[],
  workers: number[]
): number {
  const n = difficulties.length;
  const works: [number, number][] = new Array(n);
  for (let i = 0; i < n; i++) {
    works[i] = [difficulties[i], profits[i]];
  }
  works.sort((a, b) => a[0] - b[0]);
  workers.sort((a, b) => a - b);
  let i = 0;
  let ret = 0;
  let best = 0;
  for (const ability of workers) {
    while (i < n && ability >= works[i][0]) {
      best = Math.max(best, works[i++][1]);
    }
    ret += best;
  }
  return ret;
}
// @lc code=end
