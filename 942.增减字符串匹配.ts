/*
 * @lc app=leetcode.cn id=942 lang=typescript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/* 
  [I,D,I,D]
  [0,1,2,3,4]
  [0,4,1,3,2]

  [I,I,I]
  [0,1,2,3]
  [0,1,2,3]

  [D,D,I]
  [0,1,2,3]
  [3,2,0,1]
*/
/* function diStringMatch(s: string): number[] {
  const n = s.length;
  const range: number[] = new Array(n + 1);
  const ret: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    range[i] = i;
  }
  for (const c of s) {
    if (c === "I") {
      ret.push(range.shift()!);
    } else {
      ret.push(range.pop()!);
    }
  }
  ret.push(range.pop()!);
  return ret;
} */

function diStringMatch(s: string): number[] {
  const n = s.length;
  let low = 0;
  let high = n;
  const ret = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    ret[i] = s[i] === "I" ? low++ : high--;
  }
  ret[n] = low; // 最后剩下一个数，此时low === hight
  return ret;
}
// @lc code=end
