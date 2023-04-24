/*
 * @lc app=leetcode.cn id=1163 lang=typescript
 *
 * [1163] 按字典序排在最后的子串
 */

// @lc code=start
// timeout
/* function lastSubstring(s: string): string {
  let i = 0;
  let j = 1;
  const n = s.length;
  while (j < n) {
    let k = 0;
    while (j + k < n && s[i + k] === s[j + k]) {
      k++;
    }
    if (j + k < n && s[i + k] < s[j + k]) {
      i = j;
      j = j + 1;
    } else {
      j = j + 1;
    }
  }
  return s.slice(i);
} */

// 双指针
function lastSubstring(s: string): string {
  let l = 0;
  let r = 1;
  let k = 0;
  const n = s.length;
  while (r + k < n) {
    if (s[l + k] === s[r + k]) {
      k++;
    } else if (s[l] < s[r + k]) {
      l = r + k;
      r = l + 1;
      k = 0;
    } else if (s[l + k] < s[r + k]) {
      l = r;
      r = r + 1;
      k = 0;
    } else {
      r++;
      k = 0;
    }
  }
  return s.slice(l);
}
// @lc code=end
