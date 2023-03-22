/*
 * @lc app=leetcode.cn id=1626 lang=typescript
 *
 * [1626] 无矛盾的最佳球队
 */

// @lc code=start
// 动态规划
/* function bestTeamScore(scores: number[], ages: number[]): number {
  const n = scores.length;
  // people[i][0]表示第i名球员的分数
  // people[i][1]表示第i名球员的年龄
  const people: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    people[i][0] = scores[i];
    people[i][1] = ages[i];
  }
  // 将所有队员按照分数升序进行排序，分数相同时，则按照年龄升序进行排序
  people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let ret = 0;
  // dp[i]表示当第i名球员为最后一名球员时，球队可取得的最高分数
  const dp: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // 让球队的最后一名球员的年龄不小于该球员前面一名球员的年龄即可
      if (people[j][1] <= people[i][1]) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i] += people[i][0];
    ret = Math.max(ret, dp[i]);
  }
  return ret;
} */

// 动态规划（树状数组）
function bestTeamScore(scores: number[], ages: number[]): number {
  let ret = 0;
  const maxAge = Math.max(...ages);
  // 树状数组t[i]表示球队中包含年龄为i的球员时，球队的最高分数
  const t = new Array(maxAge + 1).fill(0);
  const n = scores.length;
  const people: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
    people[i][0] = scores[i];
    people[i][1] = ages[i];
  }
  people.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  const lowbit = (x: number) => {
    return x & -x;
  };
  // 在区间t[people[i][1]...maxAge]上更新最高分数
  const update = (i: number, val: number) => {
    for (; i <= maxAge; i += lowbit(i)) {
      t[i] = Math.max(t[i], val);
    }
  };
  // 在区间t[0...people[i][1]]上查询最高分数
  const query = (i: number) => {
    let ret = 0;
    for (; i > 0; i -= lowbit(i)) {
      ret = Math.max(ret, t[i]);
    }
    return ret;
  };
  for (let i = 0; i < n; i++) {
    const [score, age] = people[i];
    const cur = score + query(age);
    update(age, cur);
    ret = Math.max(ret, cur);
  }
  return ret;
}
// @lc code=end
