/*
 * @lc app=leetcode.cn id=970 lang=typescript
 *
 * [970] 强整数
 */

// @lc code=start
function powerfulIntegers(x: number, y: number, bound: number): number[] {
  const set = new Set<number>();
  let value1 = 1;
  for (let i = 0; i <= 20; i++) {
    let value2 = 1;
    for (let j = 0; j <= 20; j++) {
      let value = value1 + value2;
      if (value <= bound) {
        set.add(value);
      } else {
        break;
      }
      value2 *= y;
    }
    if (value1 > bound) {
      break;
    }
    value1 *= x;
  }
  return [...set];
}
// @lc code=end
