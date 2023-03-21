/*
 * @lc app=leetcode.cn id=2469 lang=typescript
 *
 * [2469] 温度转换
 */

// @lc code=start
function convertTemperature(celsius: number): number[] {
  return [celsius + 273.15, celsius * 1.8 + 32];
}
// @lc code=end
