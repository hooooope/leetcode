/*
 * @lc app=leetcode.cn id=399 lang=typescript
 *
 * [399] 除法求值
 */

// @lc code=start
// 并查集
class UnionFind {
  private parent: number[];
  private weight: number[];

  constructor(n: number) {
    this.parent = new Array(n);
    this.weight = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.weight[i] = 1;
    }
  }

  union(x: number, y: number, value: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return;
    }
    this.parent[rootX] = rootY;
    this.weight[rootX] = (this.weight[y] * value) / this.weight[x];
  }

  find(x: number): number {
    // 路径压缩
    if (x !== this.parent[x]) {
      const origin = this.parent[x];
      this.parent[x] = this.find(this.parent[x]);
      this.weight[x] *= this.weight[origin];
    }
    return this.parent[x];
  }

  isConnected(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) {
      return this.weight[x] / this.weight[y];
    } else {
      return -1;
    }
  }
}

function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const equationSize = equations.length;
  const unionFind = new UnionFind(2 * equationSize);
  // 第一步：预处理，将变量的值与id进行映射，使得并查集的底层使用数组的实现，方便编码
  const hashMap = new Map<string, number>();
  let id = 0;
  for (let i = 0; i < equationSize; i++) {
    const equation = equations[i];
    const var1 = equation[0];
    const var2 = equation[1];
    if (!hashMap.has(var1)) {
      hashMap.set(var1, id);
      id++;
    }
    if (!hashMap.has(var2)) {
      hashMap.set(var2, id);
      id++;
    }
    unionFind.union(hashMap.get(var1)!, hashMap.get(var2)!, values[i]);
  }
  // 第二步：做查询
  const queriesSize = queries.length;
  const ret = new Array(queriesSize);
  for (let i = 0; i < queriesSize; i++) {
    const var1 = queries[i][0];
    const var2 = queries[i][1];
    const id1 = hashMap.get(var1);
    const id2 = hashMap.get(var2);
    if (id1 === undefined || id2 === undefined) {
      ret[i] = -1;
    } else {
      ret[i] = unionFind.isConnected(id1, id2);
    }
  }
  return ret;
}
// @lc code=end
