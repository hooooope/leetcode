/*
 * @lc app=leetcode.cn id=744 lang=typescript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/* function nextGreatestLetter(letters: string[], target: string): string {
  let i = 0;
  while (true) {
    for (const letter of letters) {
      if (letter.charCodeAt(0) + i * 26 > target.charCodeAt(0)) {
        return letter;
      }
    }
    i++;
  }
} */

// 线性查找
/* function nextGreatestLetter(letters: string[], target: string): string {
  let nextGreater = letters[0];
  for (const letter of letters) {
    if (letter > target) {
      nextGreater = letter;
      break;
    }
  }
  return nextGreater;
} */

// 二分查找
function nextGreatestLetter(letters: string[], target: string): string {
  const m = letters.length;
  if (letters[m - 1] <= target) {
    return letters[0];
  }
  let low = 0;
  let high = m - 1;
  while (low < high) {
    const mid = low + ((high - low) >> 1);
    if (letters[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return letters[low];
}
// @lc code=end
