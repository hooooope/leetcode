/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
/* function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;

  do {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
    }
    i--;
  } while (i >= 0 && digits[i + 1] === 0);

  if (digits[i + 1] === 0) {
    digits.unshift(1);
  }

  return digits;
} */

function plusOne(digits: number[]): number[] {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      for (let j = i + 1; j < len; j++) {
        digits[j] = 0;
      }
      return digits;
    }
  }
  const ret = new Array(len + 1).fill(0);
  ret[0] = 1;
  return ret;
}
// @lc code=end
