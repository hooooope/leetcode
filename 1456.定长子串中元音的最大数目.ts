/*
 * @lc app=leetcode.cn id=1456 lang=typescript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
// 滑动窗口
function maxVowels(s: string, k: number): number {
  const n = s.length
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  let count = 0
  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) {
      count++
    }
  }
  let ret = count;
  for (let left = 0, right = k; right < n; left++, right++) {
    if (set.has(s[left])) {
      count--
    }
    if (set.has(s[right])) {
      count++
    }
    ret = Math.max(ret, count)
  }
  return ret
};
// @lc code=end

