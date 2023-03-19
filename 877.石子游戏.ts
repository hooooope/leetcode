/*
 * @lc app=leetcode.cn id=877 lang=typescript
 *
 * [877] 石子游戏
 */

// @lc code=start
// 暴力递归法
/* function stoneGame(piles: number[]): boolean {
  const first = (piles: number[], start: number, end: number): number => {
    if (start === end) {
      return piles[start];
    }
    return Math.max(
      piles[start] + second(piles, start + 1, end),
      second(piles, start, end - 1) + piles[end]
    );
  };
  const second = (piles: number[], start: number, end: number): number => {
    if (start === end) {
      return 0;
    }
    return Math.min(first(piles, start + 1, end), first(piles, start, end - 1));
  };
  const n = piles.length;
  return first(piles, 0, n - 1) > second(piles, 0, n - 1);
} */

// 严格表结构法
/* function stoneGame(piles: number[]): boolean {
  const n = piles.length;
  const first: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  const second: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    first[i][i] = piles[i];
  }
  let row = 0;
  let col = 1;
  while (col < n) {
    let i = row;
    let j = col;
    while (i < n && j < n) {
      first[i][j] = Math.max(
        piles[i] + second[i + 1][j],
        second[i][j - 1] + piles[j]
      );
      second[i][j] = Math.min(first[i + 1][j], first[i][j - 1]);
      i++;
      j++;
    }
    col++;
  }
  return first[0][n - 1] > second[0][n - 1];
} */

// 严格表结构法
/* function stoneGame(piles: number[]): boolean {
  const n = piles.length;
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    dp[i][i] = piles[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = Math.max(piles[i] + dp[i + 1][j], dp[i][j - 1] + piles[j]);
    }
  }
  return dp[0][n - 1] > 0;
} */

// 严格表结构法（空间压缩）
/* function stoneGame(piles: number[]): boolean {
  const n = piles.length;
  const dp: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = piles[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[j] = Math.max(piles[i] + dp[j], dp[j - 1] + piles[j]);
    }
  }
  return dp[n - 1] > 0;
} */

// 数学法
function stoneGame(piles: number[]): boolean {
  return true;
}
// @lc code=end
