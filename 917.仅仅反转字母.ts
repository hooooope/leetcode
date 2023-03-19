/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
  const isLetter = (c: string) => {
    return (
      (c.charCodeAt(0) >= "A".charCodeAt(0) &&
        c.charCodeAt(0) <= "Z".charCodeAt(0)) ||
      (c.charCodeAt(0) >= "a".charCodeAt(0) &&
        c.charCodeAt(0) <= "z".charCodeAt(0))
    );
  };
  const n = s.length;
  const chars = s.split("");
  let left = 0;
  let right = n - 1;
  while (left < right) {
    while (left < n && !isLetter(chars[left])) {
      left++;
    }
    while (right >= 0 && !isLetter(chars[right])) {
      right--;
    }
    if (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }
  return chars.join("");
}
// @lc code=end
