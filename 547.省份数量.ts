/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */

// @lc code=start
// DFS
/* function findCircleNum(isConnected: number[][]): number {
  const dfs = (i: number) => {
    seen[i] = true;
    for (let j = 0; j < n; j++) {
      if (!seen[j] && isConnected[i][j]) {
        dfs(j);
      }
    }
  };
  const n = isConnected.length;
  const seen = new Array(n).fill(false);
  let ret = 0;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      dfs(i);
      ret++;
    }
  }
  return ret;
} */

// BFS
/* function findCircleNum(isConnected: number[][]): number {
  let ret = 0;
  const n = isConnected.length;
  const seen = new Array(n).fill(false);
  const queue: number[] = [];
  for (let x = 0; x < n; x++) {
    if (!seen[x]) {
      queue.push(x);
      ret++;
      while (queue.length) {
        const i = queue.shift()!;
        seen[i] = true;
        for (let j = 0; j < n; j++) {
          if (!seen[j] && isConnected[i][j] === 1) {
            queue.push(j);
          }
        }
      }
    }
  }
  return ret;
} */

// 并查集
function findCircleNum(isConnected: number[][]): number {
  const find = (parent: number[], index: number) => {
    if (parent[index] !== index) {
      parent[index] = find(parent, parent[index]);
    }
    return parent[index];
  };
  const union = (parent: number[], index1: number, index2: number) => {
    parent[find(parent, index1)] = find(parent, index2);
  };
  const n = isConnected.length;
  const parent = new Array(n).fill(0).map((_, i) => i);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        union(parent, i, j);
      }
    }
  }
  let ret = 0;
  for (let i = 0; i < parent.length; i++) {
    if (parent[i] === i) {
      ret++;
    }
  }
  return ret;
}
// @lc code=end
