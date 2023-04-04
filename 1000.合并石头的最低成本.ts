/*
 * @lc app=leetcode.cn id=1000 lang=typescript
 *
 * [1000] 合并石头的最低成本
 */

// @lc code=start
function mergeStones(stones: number[], k: number): number {
  const INF = 0x3f3f3f3f;
  const n = stones.length;
  // 每一次合并将k堆石头变成1堆，堆数减少k-1
  // 如果合并若干次要使得n堆变为1堆，就需要n-1是k-1的倍数
  // 在求解过程中，一些中间状态也有可能无解
  // 我们可以直接用正无穷这个数字来表征它无解
  if ((n - 1) % (k - 1) !== 0) {
    return -1;
  }
  // n大于1时若想将n堆石子合并为1堆，我们首先准备好不同的k堆，因此可以用d[l][r][t]描述这个状态，表示将[l,r]合并为t(1<=t<=k)堆的最低成本
  const dp: number[][][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(-1)));
  // 前缀和数组
  const sum: number[] = new Array(n).fill(0);
  // 对于所有的dp[i][i][1]，初始化为0
  for (let i = 0, s = 0; i < n; i++) {
    dp[i][i][1] = 0;
    s += stones[i];
    sum[i] = s;
  }
  const process = (l: number, r: number, t: number): number => {
    // 若d[l][r][t]不为-1，表示已经在之前的递归被求解过，直接返回答案
    if (dp[l][r][t] !== -1) {
      return dp[l][r][t];
    }
    // 当石头堆数小于t时，一定无解
    if (t > r - l + 1) {
      return INF;
    }
    if (t === 1) {
      // 当t=1时，需要将[l,r]合并为1堆
      // 先将[l,r]合并为k堆，再将这k堆合并为1堆
      // sum[l][r]是本次合并的成本，区间内石头的总数
      const ret = process(l, r, k);
      if (ret === INF) {
        return (dp[l][r][t] = INF);
      }
      return (dp[l][r][t] = ret + (sum[r] - (l === 0 ? 0 : sum[l - 1])));
    }
    // 当t>1时，考虑一个分界点p(1<=t<=k)
    // 令[l,p]合并为1堆，再令[p+1,r]合并为t-1堆
    // 这样就可以将问题拆分为两个子问题进行求解
    let ret = INF;
    for (let p = l; p < r; p += k - 1) {
      ret = Math.min(ret, process(l, p, 1) + process(p + 1, r, t - 1));
    }
    return (dp[l][r][t] = ret);
  };
  // 目标：dp[0][n-1][1]
  const ret = process(0, n - 1, 1);
  return ret;
}
// @lc code=end
