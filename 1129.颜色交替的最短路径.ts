/*
 * @lc app=leetcode.cn id=1129 lang=typescript
 *
 * [1129] 颜色交替的最短路径
 */

// @lc code=start
function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  // [红: [0: [...], 1: [...]], 蓝: [0: [...], 1: [...]]]
  // next[0][i]表示以编号i节点为起点且相邻边为红色的终点编号数组
  // next[1][i]表示以编号i节点为起点且相邻边为蓝色的终点编号数组
  const next: number[][][] = new Array(2)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array()));
  for (const [i, j] of redEdges) {
    next[0][i].push(j);
  }
  for (const [i, j] of blueEdges) {
    next[1][i].push(j);
  }
  // [红: [0: 0, 1: MAX, ...], 蓝: [0: 0, 1: MAX, ...]]
  // dist[0][i]表示以编号i节点为终点且最终边为红色的最短交替路径
  // dist[1][i]表示以编号i节点为终点且最终边为蓝色的最短交替路径
  // 若dist[t][i]为Number.MAX_VALUE表示以编号i节点为终点不存在交替路径
  const dist: number[][] = new Array(2)
    .fill(0)
    .map(() => new Array(n).fill(Number.MAX_VALUE));
  dist[0][0] = 0;
  dist[1][0] = 0;
  // [[编号, 类型], [编号, 类型]]
  // 类型为0，表示最终指向当前编号节点的边为红色
  // 类型为1，表示最终指向当前编号节点的边为蓝色
  // 两种类型的边可能同时存在
  const queue: number[][] = [];
  queue.push([0, 0]);
  queue.push([0, 1]);
  while (queue.length) {
    const [x, t] = queue.shift()!;
    for (const y of next[1 - t][x]) {
      // 防止存在自环
      if (dist[1 - t][y] !== Number.MAX_VALUE) {
        continue;
      }
      dist[1 - t][y] = dist[t][x] + 1;
      queue.push([y, 1 - t]);
    }
  }
  const ret = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    // 从节点0到某一节点的颜色交替最短路径的长度为两种类型的颜色交替最短路径长度的最小值
    ret[i] = Math.min(dist[0][i], dist[1][i]);
    if (ret[i] === Number.MAX_VALUE) {
      ret[i] = -1;
    }
  }
  return ret;
}
// @lc code=end
