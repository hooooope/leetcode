/*
 * @lc app=leetcode.cn id=1023 lang=typescript
 *
 * [1023] 驼峰式匹配
 */

// @lc code=start
function camelMatch(queries: string[], pattern: string): boolean[] {
  const isMatch = (query: string, pattern: string): boolean => {
    let i = 0;
    for (const c of query) {
      if (i < pattern.length && c === pattern[i]) {
        // 若匹配串和模式串的字母相同，则继续匹配下一个字母
        i++;
      } else if (c < "a" || c > "z") {
        // 1.当模式串遍历完成后，只能继续匹配小写字母，若遇见大写字母则匹配失败
        // 2.若匹配串和模式串的字母不相同，仍可以匹配小写字母，若遇到大写字母则匹配失败
        return false;
      }
    }
    // 只有匹配串和模式串都遍历完成，才匹配成功
    return i === pattern.length;
  };
  const ret: boolean[] = [];
  for (const query of queries) {
    ret.push(isMatch(query, pattern));
  }
  return ret;
}
// @lc code=end
