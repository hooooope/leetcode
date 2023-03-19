/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
/* function isPalindrome(s: string): boolean {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
} */

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  const reg = /[0-9a-zA-Z]/;
  while (left < right) {
    while (left < right && !reg.test(s[left])) {
      left++;
    }
    while (left < right && !reg.test(s[right])) {
      right--;
    }
    if (left < right) {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
}
// @lc code=end
