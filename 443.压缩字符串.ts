/*
 * @lc app=leetcode.cn id=443 lang=typescript
 *
 * [443] 压缩字符串
 */

// @lc code=start
// 双指针
function compress(chars: string[]): number {
  const n = chars.length
  let write = 0
  let left = 0
  for (let read = 0; read < n; read++) {
    const char = chars[read]
    if (read === n - 1 || char !== chars[read + 1]) {
      chars[write++] = char
      let count = read - left + 1
      if (count > 1) {
        for (const c of String(count)) {
          chars[write++] = c
        }
      }
      left = read + 1
    }
  }
  return write
};
// @lc code=end

