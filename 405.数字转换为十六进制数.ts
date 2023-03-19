/*
 * @lc app=leetcode.cn id=405 lang=typescript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/* function toHex(num: number): string {
  if (num === 0) {
    return "0";
  }
  num >>>= 0; // 处理负数
  const sb: string[] = [];
  while (num) {
    const n = num % 16;
    sb.unshift(
      n < 10 ? String(n) : String.fromCharCode("a".charCodeAt(0) + n - 10)
    );
    num >>>= 4;
  }
  return sb.join("");
} */

// 分组位运算
function toHex(num: number): string {
  if (num === 0) {
    return "0";
  }
  const sb: string[] = [];
  // 按4位一组，将32位分为8组
  for (let i = 7; i >= 0; i--) {
    const val = (num >> (4 * i)) & 0xf;
    // 防止出现前导零
    if (sb.length > 0 || val > 0) {
      const digit =
        val < 10
          ? String(val)
          : String.fromCharCode("a".charCodeAt(0) + val - 10);
      sb.push(digit);
    }
  }
  return sb.join("");
}
// @lc code=end
