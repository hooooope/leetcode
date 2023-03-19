/*
 * @lc app=leetcode.cn id=1237 lang=typescript
 *
 * [1237] 找出给定方程的正整数解
 */

// @lc code=start
/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *      f(x: number, y: number): number {}
 * }
 */
// 枚举法
/* function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const ret: number[][] = [];
  for (let x = 1; x <= 1000; x++) {
    for (let y = 1; y <= 1000; y++) {
      if (customfunction.f(x, y) === z) {
        ret.push([x, y]);
      }
    }
  }
  return ret;
} */

// 二分查找法
/* function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const ret: number[][] = [];
  for (let x = 1; x <= 1000; x++) {
    let l = 1;
    let r = 1000;
    while (l <= r) {
      let y = ((r - l) >> 1) + l;
      const v = customfunction.f(x, y);
      if (v === z) {
        ret.push([x, y]);
        break;
      } else if (v < z) {
        l = y + 1;
      } else {
        r = y - 1;
      }
    }
  }
  return ret;
} */

// 双指针
function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const ret: number[][] = [];
  for (let x = 1, y = 1000; x <= 1000 && y >= 1; x++) {
    while (y >= 1 && customfunction.f(x, y) > z) {
      y--;
    }
    if (y >= 1 && customfunction.f(x, y) === z) {
      ret.push([x, y]);
    }
  }
  return ret;
}
// @lc code=end
