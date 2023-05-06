/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
// DFS
/* function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  let valid = true;
  // visited[i]: 0表示未搜索；1表示搜索中；2表示已完成
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
        if (!valid) {
          return;
        }
      } else if (visited[v] === 1) {
        valid = false;
        return;
      }
    }
    visited[u] = 2;
  };
  for (let i = 0; i < numCourses && valid; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }
  return valid;
} */

// BFS
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const edges: number[][] = new Array(numCourses)
    .fill(0)
    .map(() => new Array());
  // indeg[i]表示顶点i的入度
  const indeg: number[] = new Array(numCourses).fill(0);
  for (const info of prerequisites) {
    edges[info[1]].push(info[0]);
    indeg[info[0]]++;
  }
  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    // 将入度为0的顶点入队
    if (indeg[i] == 0) {
      queue.push(i);
    }
  }
  let visited = 0;
  while (queue.length) {
    visited++;
    const u = queue.shift()!;
    // 删除当前顶点的邻边
    for (const v of edges[u]) {
      indeg[v]--;
      if (indeg[v] === 0) {
        queue.push(v);
      }
    }
  }
  return visited === numCourses;
}
// @lc code=end
