/*
 * @lc app=leetcode.cn id=682 lang=typescript
 *
 * [682] 棒球比赛
 */

// @lc code=start
function calPoints(operations: string[]): number {
  let ret = 0;
  let score = 0;
  const scores: number[] = [];
  for (const op of operations) {
    const n = scores.length;
    switch (op) {
      case "+":
        score = scores[n - 1] + scores[n - 2];
        scores.push(score);
        ret += score;
        break;
      case "D":
        score = scores[n - 1] * 2;
        scores.push(score);
        ret += score;
        break;
      case "C":
        score = scores.pop()!;
        ret -= score;
        break;
      default:
        score = Number(op);
        scores.push(score);
        ret += score;
    }
  }
  return ret;
}
// @lc code=end
