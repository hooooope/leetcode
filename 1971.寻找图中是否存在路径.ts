/*
 * @lc app=leetcode.cn id=1971 lang=typescript
 *
 * [1971] 寻找图中是否存在路径
 */

// @lc code=start
// bfs
/* function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  // 根据索引存放所有节点的相邻边
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
    const x = edge[0];
    const y = edge[1];
    adj[x].push(y);
    adj[y].push(x);
  }
  const queue: number[] = [];
  const visited = new Array(n).fill(false);
  queue.push(source);
  visited[source] = true;
  while (queue.length) {
    const vertex = queue.shift()!;
    if (vertex === destination) {
      break;
    }
    for (const next of adj[vertex]) {
      if (!visited[next]) {
        queue.push(next);
        visited[next] = true;
      }
    }
  }
  return visited[destination];
} */

// dfs（递归）
/* function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
    const x = edge[0];
    const y = edge[1];
    adj[x].push(y);
    adj[y].push(x);
  }
  const visited = new Array(n).fill(false);
  const dfs = (
    source: number,
    destination: number,
    adj: number[][],
    visited: boolean[]
  ): boolean => {
    if (source === destination) {
      return true;
    }
    visited[source] = true;
    for (const next of adj[source]) {
      if (!visited[next] && dfs(next, destination, adj, visited)) {
        return true;
      }
    }
    return false;
  };
  return dfs(source, destination, adj, visited);
} */

// dfs（非递归）
/* function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
    const x = edge[0];
    const y = edge[1];
    adj[x].push(y);
    adj[y].push(x);
  }
  const stack: number[] = [];
  const visited = new Array(n).fill(false);
  stack.push(source);
  visited[source] = true;
  while (stack.length) {
    const vertex = stack.pop()!;
    if (vertex === destination) {
      break;
    }
    for (const next of adj[vertex]) {
      if (!visited[next]) {
        stack.push(vertex);
        stack.push(next);
        visited[next] = true;
        break;
      }
    }
  }
  return visited[destination];
} */

// 并查集
class UnionFind {
  private parent: number[];
  private rank: number[];
  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  // 合并两个元素所在的集合
  union(x: number, y: number) {
    const rootx = this.find(x);
    const rooty = this.find(y);
    if (rootx !== rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx;
      } else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty;
      } else {
        this.parent[rooty] = rootx;
        this.rank[rootx]++;
      }
    }
  }
  // 查找当前元素所在的集合
  find(x: number) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  // 判断两个元素是否在同一个集合
  connect(x: number, y: number) {
    return this.find(x) === this.find(y);
  }
}
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) {
    return true;
  }
  const uf = new UnionFind(n);
  for (const edge of edges) {
    uf.union(edge[0], edge[1]);
  }
  return uf.connect(source, destination);
}
// @lc code=end
