/*
 * @lc app=leetcode.cn id=506 lang=typescript
 *
 * [506] 相对名次
 */

// @lc code=start
/* function findRelativeRanks(score: number[]): string[] {
  const ret: string[] = [];
  const sorted = [...score].sort((a, b) => b - a);
  for (let i = 0; i < score.length; i++) {
    const index = sorted.findIndex((e) => e === score[i]);
    if (index === 0) {
      ret.push("Gold Medal");
    } else if (index === 1) {
      ret.push("Silver Medal");
    } else if (index === 2) {
      ret.push("Bronze Medal");
    } else {
      ret.push(String(index + 1));
    }
  }
  return ret;
} */

// 优化：排序时保留（记录）原索引
function findRelativeRanks(score: number[]): string[] {
  const n = score.length;
  const ret: string[] = new Array(n).fill(0);
  const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  const sorted = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    sorted[i][0] = score[i];
    sorted[i][1] = i;
  }
  sorted.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < n; i++) {
    const index = sorted[i][1];
    if (i < 3) {
      ret[index] = desc[i];
    } else {
      ret[index] = String(i + 1);
    }
  }
  return ret;
}
// @lc code=end
