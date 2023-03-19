/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  const n = s.length;
  const m = goal.length;
  if (n !== m) {
    return false;
  }
  if (s === goal) {
    // 当s与goal相同，只要s中存在两个相同的字符，即为亲密字符串
    const count = new Array(26).fill(0);
    for (const c of s) {
      const index = c.charCodeAt(0) - "a".charCodeAt(0);
      count[index]++;
      if (count[index] > 1) {
        return true;
      }
    }
    return false;
  } else {
    let first = -1;
    let second = -1;
    for (let i = 0; i < n; i++) {
      if (s[i] !== goal[i]) {
        if (first === -1) {
          first = i;
        } else if (second === -1) {
          second = i;
        } else {
          // s与goal存在三个及以上不同的字符，则不可能为亲密字符串
          return false;
        }
      }
    }
    // s与goal只有一个不同的字符，则不可能为亲密字符串
    // s与goal存在两个不同的字符，且s[i]=goal[j] && s[j]=goal[i]，即为亲密字符串
    return (
      second !== -1 && s[first] === goal[second] && s[second] === goal[first]
    );
  }
}
// @lc code=end
