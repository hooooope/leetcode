/*
 * @lc app=leetcode.cn id=989 lang=typescript
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
// 遍历k逐位相加
/* function addToArrayForm(num: number[], k: number): number[] {
  let i = num.length - 1;
  while (k) {
    const remainder = k % 10;
    k = Math.floor(k / 10);
    if (i >= 0) {
      let sum = num[i] + remainder;
      if (sum >= 10) {
        sum %= 10;
        k++;
      }
      num[i--] = sum;
    } else {
      num.unshift(remainder);
    }
  }
  return num;
} */

// 遍历num逐位相加
/* function addToArrayForm(num: number[], k: number): number[] {
  const ret: number[] = [];
  for (let i = num.length - 1; i >= 0; i--) {
    let sum = num[i] + (k % 10);
    k = Math.floor(k / 10);
    if (sum >= 10) {
      sum %= 10;
      k++;
    }
    ret.push(sum);
  }
  while (k > 0) {
    ret.push(k % 10);
    k = Math.floor(k / 10);
  }
  ret.reverse();
  return ret;
} */

function addToArrayForm(num: number[], k: number): number[] {
  const ret: number[] = [];
  const n = num.length;
  let i = n - 1;
  while (i >= 0 || k > 0) {
    if (i >= 0) {
      k += num[i];
    }
    ret.push(k % 10);
    k = Math.floor(k / 10);
    i--;
  }
  ret.reverse();
  return ret;
}
// @lc code=end
