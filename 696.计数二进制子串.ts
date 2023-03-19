/*
 * @lc app=leetcode.cn id=696 lang=typescript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/* function countBinarySubstrings(s: string): number {
  let ret = 0;
  let i = 0;
  let count = 0;
  const n = s.length;
  const counts: number[] = [];
  while (i < n) {
    const c = s[i];
    while (i < n && s[i] === c) {
      count++;
      i++;
    }
    counts.push(count);
    count = 0;
  }
  for (let i = 1; i < counts.length; i++) {
    ret += Math.min(counts[i - 1], counts[i]);
  }
  return ret;
} */

// 优化空间复杂度
function countBinarySubstrings(s: string): number {
  let ret = 0;
  let i = 0;
  let last = 0; // 记录上一个二进制的数量，节省一个counts数组的空间
  let count = 0;
  const n = s.length;
  while (i < n) {
    const c = s[i];
    while (i < n && s[i] === c) {
      count++;
      i++;
    }
    ret += Math.min(last, count);
    last = count;
    count = 0;
  }
  return ret;
}
// @lc code=end
