/*
 * @lc app=leetcode.cn id=1807 lang=typescript
 *
 * [1807] 替换字符串中的括号内容
 */

// @lc code=start
function evaluate(s: string, knowledge: string[][]): string {
  const ret: string[] = [];
  const map = new Map<string, string>();
  for (const [key, value] of knowledge) {
    map.set(key, value);
  }
  let i = 0;
  const n = s.length;
  while (i < n) {
    const c = s[i];
    if (c === "(") {
      let key = "";
      i++; // 跳过左括号
      while (i < n && s[i] !== ")") {
        key += s[i];
        i++;
      }
      ret.push(map.get(key) ?? "?");
    } else {
      ret.push(c);
    }
    i++;
  }
  return ret.join("");
}
// @lc code=end
