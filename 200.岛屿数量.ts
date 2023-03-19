/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
// 深度优先
/* function numIslands(grid: string[][]): number {
  const infect = (grid: string[][], i: number, j: number) => {
    const n = grid.length;
    const m = grid[0].length;
    if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] !== "1") {
      return;
    }
    grid[i][j] = "2";
    infect(grid, i - 1, j);
    infect(grid, i + 1, j);
    infect(grid, i, j - 1);
    infect(grid, i, j + 1);
  };
  if (grid.length === 0) {
    return 0;
  }
  let ret = 0;
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        ret++;
        infect(grid, i, j);
      }
    }
  }
  return ret;
} */

// 广度优先
/* function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }
  let ret = 0;
  const n = grid.length;
  const m = grid[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        ret++;
        grid[i][j] = "2";
        const queue: number[] = [];
        queue.push(i * m + j);
        while (queue.length) {
          const id = queue.shift()!;
          const row = Math.floor(id / m);
          const col = id % m;
          if (row - 1 >= 0 && grid[row - 1][col] === "1") {
            grid[row - 1][col] = "2";
            queue.push((row - 1) * m + col);
          }
          if (row + 1 < n && grid[row + 1][col] === "1") {
            grid[row + 1][col] = "2";
            queue.push((row + 1) * m + col);
          }
          if (col - 1 >= 0 && grid[row][col - 1] === "1") {
            grid[row][col - 1] = "2";
            queue.push(row * m + (col - 1));
          }
          if (col + 1 < m && grid[row][col + 1] === "1") {
            grid[row][col + 1] = "2";
            queue.push(row * m + (col + 1));
          }
        }
      }
    }
  }
  return ret;
} */

// 并查集
class UnionFind {
  private count: number; // 集合数量
  private parent: number[]; // parent[i]表示元素i的父亲
  private rank: number[]; // rank[i]表示集合i的大小等级
  constructor(grid: string[][]) {
    this.count = 0;
    const m = grid.length;
    const n = grid[0].length;
    this.parent = new Array(m * n).fill(0);
    this.rank = new Array(m * n).fill(0);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === "1") {
          // 初始化时，每一个值为1的位置视为一个岛屿（即一个集合）
          this.parent[i * n + j] = i * n + j;
          this.count++;
        }
      }
    }
  }
  find(i: number) {
    if (this.parent[i] !== i) {
      // 将代表元素下面的元素扁平化
      this.parent[i] = this.find(this.parent[i]);
    }
    return this.parent[i];
  }
  union(x: number, y: number) {
    const rootx = this.find(x);
    const rooty = this.find(y);
    // 两个位置不属于同一个集合则进行合并
    if (rootx !== rooty) {
      // 将较小集合合并入较大集合中
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx;
      } else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty;
      } else {
        this.parent[rooty] = rootx;
        // 集合rootx吞噬相同大小等级的集合rooty
        // 集合rootx的大小等级加一
        this.rank[rootx]++;
      }
      // 每完成一次合并操作，集合数量减一
      this.count--;
    }
  }
  getCount() {
    return this.count;
  }
}
function numIslands(grid: string[][]): number {
  if (grid.length === 0) {
    return 0;
  }
  const n = grid.length;
  const m = grid[0].length;
  const uf = new UnionFind(grid);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        grid[i][j] = "2";
        if (i - 1 >= 0 && grid[i - 1][j] === "1") {
          uf.union(i * m + j, (i - 1) * m + j);
        }
        if (i + 1 < n && grid[i + 1][j] === "1") {
          uf.union(i * m + j, (i + 1) * m + j);
        }
        if (j - 1 >= 0 && grid[i][j - 1] === "1") {
          uf.union(i * m + j, i * m + (j - 1));
        }
        if (j + 1 < m && grid[i][j + 1] === "1") {
          uf.union(i * m + j, i * m + (j + 1));
        }
      }
    }
  }
  return uf.getCount();
}
// @lc code=end
