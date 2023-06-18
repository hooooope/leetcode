/*
 * @lc app=leetcode.cn id=1254 lang=typescript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
// BFS
/* function closedIsland(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        grid[i][j] = 1;
        const queue: [number, number][] = [];
        queue.push([i, j]);
        let closed = true;
        while (queue.length) {
          const [cx, cy] = queue.shift()!;
          if (cx === 0 || cy === 0 || cx === n - 1 || cy === m - 1) {
            closed = false;
          }
          for (let k = 0; k < 4; k++) {
            const nx = cx + dx[k];
            const ny = cy + dy[k];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] === 0) {
              grid[nx][ny] = 1;
              queue.push([nx, ny]);
            }
          }
        }
        if (closed) {
          ret++;
        }
      }
    }
  }
  return ret;
} */

// DFS
/* function closedIsland(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= n || j < 0 || j >= m) {
      return false;
    }
    if (grid[i][j] !== 0) {
      return true;
    }
    grid[i][j] = -1;
    const ret1 = dfs(i + 1, j);
    const ret2 = dfs(i - 1, j);
    const ret3 = dfs(i, j + 1);
    const ret4 = dfs(i, j - 1);
    return ret1 && ret2 && ret3 && ret4;
  };
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0 && dfs(i, j)) {
        ret++;
      }
    }
  }
  return ret;
} */

// 并查集
class UnionFind {
  parent: number[];
  rank: number[];

  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }

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

  find(x: number) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
}

function closedIsland(grid: number[][]): number {
  const n = grid.length;
  const m = grid[0].length;
  const uf = new UnionFind(n * m);
  for (let i = 0; i < n; i++) {
    if (grid[i][0] === 0) {
      uf.union(i * m, 0);
    }
    if (grid[i][m - 1] === 0) {
      uf.union(i * m + m - 1, 0);
    }
  }
  for (let j = 1; j < m - 1; j++) {
    if (grid[0][j] === 0) {
      uf.union(j, 0);
    }
    if (grid[n - 1][j] === 0) {
      uf.union((n - 1) * m + j, 0);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        if (i > 0 && grid[i - 1][j] === 0) {
          uf.union(i * m + j, (i - 1) * m + j);
        }
        if (j > 0 && grid[i][j - 1] === 0) {
          uf.union(i * m + j, i * m + j - 1);
        }
      }
    }
  }
  const cnt = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) {
        cnt.add(uf.find(i * m + j));
      }
    }
  }
  let ret = cnt.size;
  if (cnt.has(uf.find(0))) {
    ret--;
  }
  return ret;
}
// @lc code=end
