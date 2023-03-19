/*
 * @lc app=leetcode.cn id=1154 lang=typescript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/* function dayOfYear(date: string): number {
  return (
    (Date.parse(date) - Date.parse(date.slice(0, 4) + "-01-01")) /
      1000 /
      60 /
      60 /
      24 +
    1
  );
} */

function dayOfYear(date: string): number {
  const reg = /(\d{4})-(\d{2})-(\d{2})/;
  const execRet = reg.exec(date)!;
  const year = +execRet[1];
  const month = +execRet[2];
  const day = +execRet[3];
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    months[1]++;
  }
  let ret = 0;
  for (let i = 0; i < month - 1; i++) {
    ret += months[i];
  }
  return ret + day;
}
// @lc code=end
