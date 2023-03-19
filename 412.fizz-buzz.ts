/*
 * @lc app=leetcode.cn id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
  const ret: string[] = new Array(n);
  for (let i = 0; i < n; i++) {
    const n = i + 1;
    if (n % 3 === 0 && n % 5 === 0) {
      ret[i] = "FizzBuzz";
    } else if (n % 3 === 0) {
      ret[i] = "Fizz";
    } else if (n % 5 === 0) {
      ret[i] = "Buzz";
    } else {
      ret[i] = String(n);
    }
  }
  return ret;
}
// @lc code=end
