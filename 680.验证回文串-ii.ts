/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  const _validPalindrome = (s: string, low: number, high: number): boolean => {
    while (low < high) {
      if (s[low] !== s[high]) {
        return false;
      }
      low++;
      high--;
    }
    return true;
  };
  let low = 0;
  let high = s.length - 1;
  while (low < high) {
    if (s[low] === s[high]) {
      low++;
      high--;
    } else {
      return (
        _validPalindrome(s, low, high - 1) || _validPalindrome(s, low + 1, high)
      );
    }
  }
  return true;
}
// @lc code=end
