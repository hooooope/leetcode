/*
 * @lc app=leetcode.cn id=1377 lang=typescript
 *
 * [1377] T 秒后青蛙的位置
 */

// @lc code=start
// DFS
function frogPosition(
  n: number,
  edges: number[][],
  t: number,
  target: number
): number {
  const seen: boolean[] = new Array(n + 1).fill(false);
  const G: number[][] = new Array(n + 1).fill(0).map(() => new Array());
  for (const [a, b] of edges) {
    G[a].push(b);
    G[b].push(a);
  }
  const dfs = (
    G: number[][],
    seen: boolean[],
    i: number,
    t: number,
    target: number
  ): number => {
    // 青蛙无法跳回已经访问过的顶点
    const next = i === 1 ? G[i].length : G[i].length - 1;
    if (t === 0 || next === 0) {
      return i === target ? 1 : 0;
    }
    seen[i] = true;
    let ret = 0;
    for (const j of G[i]) {
      if (!seen[j]) {
        ret += dfs(G, seen, j, t - 1, target);
      }
    }
    return ret / next;
  };
  return dfs(G, seen, 1, t, target);
}
// @lc code=end
