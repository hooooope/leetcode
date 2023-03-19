/*
 * @lc app=leetcode.cn id=1247 lang=typescript
 *
 * [1247] 交换字符使得字符串相同
 */

// @lc code=start
// 贪心
function minimumSwap(s1: string, s2: string): number {
  let xy = 0;
  let yx = 0;
  const n = s1.length;
  for (let i = 0; i < n; i++) {
    if (s1[i] === "x" && s2[i] === "y") {
      xy++;
    } else if (s1[i] === "y" && s2[i] === "x") {
      yx++;
    }
  }
  if ((xy + yx) & 1) {
    return -1;
  }
  return (xy >> 1) + (yx >> 1) + (xy % 2) + (yx % 2);
}
// @lc code=end
