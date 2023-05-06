/*
 * @lc app=leetcode.cn id=210 lang=typescript
 *
 * [210] 课程表 II
 */

// @lc code=start
// DFS
/* function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let valid = true;
  let index = numCourses - 1;
  const ret: number[] = [];
  const visited = new Array(numCourses).fill(0);
  const edges: number[][] = new Array(numCourses)
    .fill(0)
    .map(() => new Array());
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
  }
  const dfs = (u: number) => {
    visited[u] = 1;
    for (const v of edges[u]) {
      if (visited[v] === 0) {
        dfs(v);
      } else if (visited[v] === 1) {
        valid = false;
        return;
      }
    }
    visited[u] = 2;
    ret[index--] = u;
  };
  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }
  if (!valid) {
    return [];
  }
  return ret;
} */

// BFS
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const ret: number[] = [];
  const edges: number[][] = new Array(numCourses)
    .fill(0)
    .map(() => new Array());
  const indeg: number[] = new Array(numCourses).fill(0);
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
    indeg[info[0]]++;
  }
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indeg[i] === 0) {
      queue.push(i);
    }
  }
  let visited = 0;
  while (queue.length) {
    visited++;
    const u = queue.shift()!;
    ret.push(u);
    for (const v of edges[u]) {
      indeg[v]--;
      if (indeg[v] === 0) {
        queue.push(v);
      }
    }
  }
  if (visited !== numCourses) {
    return [];
  }
  return ret;
}
// @lc code=end
