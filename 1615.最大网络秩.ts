/*
 * @lc app=leetcode.cn id=1615 lang=typescript
 *
 * [1615] 最大网络秩
 */

// @lc code=start
// 枚举
/* function maximalNetworkRank(n: number, roads: number[][]): number {
  // connect[i][j]表示城市i和j之间是否存在双向道路
  const connect: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(false));
  // degree[i]表示城市i与degree[i]座城市直接相连
  const degree = new Array(n).fill(0);
  for (const [i, j] of roads) {
    connect[i][j] = true;
    connect[j][i] = true;
    degree[i]++;
    degree[j]++;
  }
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const rank = degree[i] + degree[j] - (connect[i][j] ? 1 : 0);
      ret = Math.max(ret, rank);
    }
  }
  return ret;
} */

// 贪心
function maximalNetworkRank(n: number, roads: number[][]): number {
  // connect[i][j]表示城市i和j之间是否存在双向道路
  const connect: boolean[][] = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(false));
  // degree[i]表示城市i与degree[i]座城市直接相连
  const degree = new Array(n).fill(0);
  for (const [i, j] of roads) {
    connect[i][j] = true;
    connect[j][i] = true;
    degree[i]++;
    degree[j]++;
  }
  let first = -1;
  let second = -2;
  let firstArr: number[] = [];
  let secondArr: number[] = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] > first) {
      second = first;
      secondArr = [...firstArr];
      first = degree[i];
      firstArr = [i];
    } else if (degree[i] === first) {
      firstArr.push(i);
    } else if (degree[i] > second) {
      second = degree[i];
      secondArr = [i];
    } else if (degree[i] === second) {
      secondArr.push(i);
    }
  }
  if (firstArr.length === 1) {
    const u = firstArr[0];
    for (const v of secondArr) {
      if (!connect[u][v]) {
        return first + second;
      }
    }
    return first + second - 1;
  } else {
    const m = roads.length;
    if ((firstArr.length * (firstArr.length - 1)) / 2 > m) {
      return first * 2;
    }
    for (const u of firstArr) {
      for (const v of firstArr) {
        if (u !== v && !connect[u][v]) {
          return first * 2;
        }
      }
    }
    return first * 2 - 1;
  }
}
// @lc code=end
