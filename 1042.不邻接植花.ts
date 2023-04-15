/*
 * @lc app=leetcode.cn id=1042 lang=typescript
 *
 * [1042] 不邻接植花
 */

// @lc code=start
function gardenNoAdj(n: number, paths: number[][]): number[] {
  const garden2gardens = new Map<number, number[]>();
  for (const path of paths) {
    const start = path[0] - 1;
    const end = path[1] - 1;
    if (garden2gardens.has(start)) {
      garden2gardens.get(start)!.push(end);
    } else {
      garden2gardens.set(start, [end]);
    }
    if (garden2gardens.has(end)) {
      garden2gardens.get(end)!.push(start);
    } else {
      garden2gardens.set(end, [start]);
    }
  }
  const ret: number[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= 4; j++) {
      const neighbor = garden2gardens.get(i) ?? [];
      let flag = true;
      for (let k = 0; k < neighbor.length; k++) {
        const flower = ret[neighbor[k]];
        if (flower && flower === j) {
          flag = false;
          break;
        }
      }
      if (flag) {
        ret.push(j);
        break;
      }
    }
  }
  return ret;
}
// @lc code=end
