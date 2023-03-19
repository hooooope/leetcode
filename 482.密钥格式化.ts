/*
 * @lc app=leetcode.cn id=482 lang=typescript
 *
 * [482] 密钥格式化
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
  const ret: string[] = [];
  let cnt = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== "-") {
      ret.push(s[i].toUpperCase());
      cnt++;
      if (cnt % k === 0) {
        ret.push("-");
      }
    }
  }
  if (ret.length && ret[ret.length - 1] === "-") {
    ret.pop();
  }
  return ret.reverse().join("");
}
// @lc code=end
