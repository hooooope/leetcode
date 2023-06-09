/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 滑动窗口
/* function lengthOfLongestSubstring(s: string): number {
  let ret = 0;
  const n = s.length;
  // 记录每个字符是否出现过
  const set = new Set();
  // 右指针，初始值为-1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let r = -1;
  for (let l = 0; l < n; l++) {
    if (l !== 0) {
      // 左指针向右移动一格，移除一个字符
      set.delete(s[l - 1]);
    }
    while (r + 1 < n && !set.has(s[r + 1])) {
      // 不断地移动右指针
      set.add(s[r + 1]);
      r++;
    }
    // 第l到r个字符是一个极长的无重复字符子串
    ret = Math.max(ret, r - l + 1);
  }
  return ret;
} */

// 两个瓶颈
function lengthOfLongestSubstring(s: string): number {
  let ret = 0;
  const n = s.length;
  // 记录每个字符上一次出现的索引
  const map: number[] = new Array(256).fill(-1);
  // 前一个字符的瓶颈
  let pre = -1;
  for (let i = 0; i < n; i++) {
    const charCode = s[i].charCodeAt(0);
    // map[charCode]为当前字符上一次出现的索引
    // 在两者之间取最大值作为当前字符的瓶颈
    pre = Math.max(pre, map[charCode]);
    ret = Math.max(ret, i - pre);
    map[charCode] = i;
  }
  return ret;
}
// @lc code=end
