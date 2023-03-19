/*
 * @lc app=leetcode.cn id=2283 lang=typescript
 *
 * [2283] 判断一个数的数字计数是否等于数位的值
 */

// @lc code=start
function digitCount(num: string): boolean {
  const map = new Map<number, number>();
  for (const c of num) {
    const n = Number(c);
    map.set(n, (map.get(n) ?? 0) + 1);
  }
  for (let i = 0; i < num.length; i++) {
    if ((map.get(i) ?? 0) !== Number(num[i])) {
      return false;
    }
  }
  return true;
}
// @lc code=end
