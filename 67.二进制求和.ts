/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
/* 
  0 + 0 = 0
  0 + 1 = 1
  1 + 0 = 1
  1 + 1 = (1)0
*/
function addBinary(a: string, b: string): string {
  let ret = "";
  let carry = 0;

  const len = Math.max(a.length, b.length);
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");

  for (let i = len - 1; i >= 0; i--) {
    carry += Number(a[i] === "1");
    carry += Number(b[i] === "1");
    ret += carry % 2 ? "1" : "0";
    carry >>= 1;
  }

  if (carry) {
    ret += "1";
  }

  return ret.split("").reverse().join("");
}
// @lc code=end
