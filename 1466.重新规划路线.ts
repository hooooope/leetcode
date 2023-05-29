/*
 * @lc app=leetcode.cn id=1466 lang=typescript
 *
 * [1466] 重新规划路线
 */

// @lc code=start
class Node {
  constructor(public val: number, public direction: boolean) {}
}

// DFS
/* function minReorder(n: number, connections: number[][]): number {
  const edges: Node[][] = new Array(n).fill(0).map(() => new Array());
  for (const [from, to] of connections) {
    edges[from].push(new Node(to, true));
    edges[to].push(new Node(from, false));
  }
  const dfs = (curr: number, prev: number) => {
    let ret = 0;
    for (const next of edges[curr]) {
      if (next.val === prev) {
        continue;
      }
      ret += Number(next.direction);
      ret += dfs(next.val, curr);
    }
    return ret;
  };
  return dfs(0, -1);
} */

// BFS
function minReorder(n: number, connections: number[][]): number {
  // city -> connections index
  const map: number[][] = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < connections.length; i++) {
    const [from, to] = connections[i];
    map[from].push(i);
    map[to].push(i);
  }
  let ret = 0;
  const seen: boolean[] = new Array(n).fill(false);
  const queue: number[] = [0];
  while (queue.length) {
    const city = queue.shift()!;
    for (const i of map[city]) {
      if (seen[i]) {
        continue;
      }
      seen[i] = true;
      const [from, to] = connections[i];
      ret += Number(from === city);
      queue.push(from === city ? to : from);
    }
  }
  return ret;
}
export {};
// @lc code=end
