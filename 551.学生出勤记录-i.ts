/*
 * @lc app=leetcode.cn id=551 lang=typescript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/* function checkRecord(s: string): boolean {
  return Boolean((s.match(/A/g)?.length ?? 0) < 2 && !/L{3}/.test(s));
} */

function checkRecord(s: string): boolean {
  let absents = 0;
  let lates = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "A") {
      absents++;
      if (absents >= 2) {
        return false;
      }
    }
    if (c === "L") {
      lates++;
      if (lates >= 3) {
        return false;
      }
    } else {
      lates = 0;
    }
  }
  return true;
}
// @lc code=ends
