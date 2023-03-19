/*
 * @lc app=leetcode.cn id=1108 lang=typescript
 *
 * [1108] IP 地址无效化
 */

// @lc code=start
function defangIPaddr(address: string): string {
  return address.replace(/\./g, "[.]");
}
// @lc code=end
