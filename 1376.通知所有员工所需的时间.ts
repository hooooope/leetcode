/*
 * @lc app=leetcode.cn id=1376 lang=typescript
 *
 * [1376] 通知所有员工所需的时间
 */

// @lc code=start
// DFS
/* function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  // parent -> children
  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    if (!map.has(manager[i])) {
      map.set(manager[i], []);
    }
    map.get(manager[i])!.push(i);
  }
  const dfs = (
    id: number,
    informTime: number[],
    map: Map<number, number[]>
  ) => {
    let ret = 0;
    for (const child of map.get(id) || []) {
      ret = Math.max(ret, dfs(child, informTime, map));
    }
    return informTime[id] + ret;
  };
  return dfs(headID, informTime, map);
} */

// BFS
/* function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  let ret = 0;
  // parent -> children
  const map = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    if (!map.has(manager[i])) {
      map.set(manager[i], []);
    }
    map.get(manager[i])!.push(i);
  }
  // queue[1]表示公司总负责人的通知到达员工queue[0]所需要的分钟数
  const queue: [number, number][] = [];
  queue.push([headID, 0]);
  while (queue.length) {
    const [id, val] = queue.shift()!;
    if (map.has(id)) {
      // 遍历当前节点的下属，将其加入队列
      for (const child of map.get(id)!) {
        queue.push([child, val + informTime[id]]);
      }
    } else {
      // 如果当前节点没有下属，更新结果
      ret = Math.max(ret, val);
    }
  }
  return ret;
} */

// 自底向上（记忆化搜索）
function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  let ret = 0;
  const memo = new Map<number, number>();
  const dfs = (id: number) => {
    if (id === headID) {
      return 0;
    }
    if (!memo.has(id)) {
      memo.set(id, informTime[manager[id]] + dfs(manager[id]));
    }
    return memo.get(id)!;
  };
  for (let i = 0; i < n; i++) {
    ret = Math.max(ret, dfs(i));
  }
  return ret;
}
// @lc code=end
