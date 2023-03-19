/*
 * @lc app=leetcode.cn id=1250 lang=typescript
 *
 * [1250] 检查「好数组」
 */

// @lc code=start
// 裴蜀定理
// 若，gcd(x, y) = g，
// 则存在a * x + b * y = g
function isGoodArray(nums: number[]): boolean {
  // 欧几里得定理
  const gcd = (num1: number, num2: number) => {
    while (num2 !== 0) {
      const temp = num1;
      num1 = num2;
      num2 = temp % num2;
    }
    return num1;
  };
  let divisor = nums[0];
  for (const num of nums) {
    divisor = gcd(divisor, num);
    // 提前结束循环，因为1和任何正整数的最大公约数都是1
    if (divisor === 1) {
      break;
    }
  }
  return divisor === 1;
}
// @lc code=end
