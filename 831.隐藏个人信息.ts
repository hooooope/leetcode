/*
 * @lc app=leetcode.cn id=831 lang=typescript
 *
 * [831] 隐藏个人信息
 */

// @lc code=start
function maskPII(s: string): string {
  const country = ["", "+*-", "+**-", "+***-"];
  const at = s.indexOf("@");
  if (at > 0) {
    s = s.toLowerCase();
    return s[0] + "*****" + s.substring(at - 1);
  }
  let sb = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if ("0" <= c && c <= "9") {
      sb += c;
    }
  }
  return country[sb.length - 10] + "***-***-" + sb.substring(sb.length - 4);
}
// @lc code=end
