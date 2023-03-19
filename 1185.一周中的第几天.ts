/*
 * @lc app=leetcode.cn id=1185 lang=typescript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
function dayOfTheWeek(day: number, month: number, year: number): string {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  // Math.floor(year - 1969) / 4
  // 在1971～2100年间第一个闰年是1972年
  // 若输入为1973年，则Math.floor((1973 - 1971) / 4)，无法贡献1972年闰月的一天
  // 1973 - 4 = 1969，因此需要设置Math.floor((year - 1972) / 4)，1972年才能贡献出闰月的一天
  let days = (year - 1971) * 365 + Math.floor((year - 1969) / 4);
  for (let i = 0; i < month - 1; i++) {
    days += monthDays[i];
  }
  if (
    (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) &&
    month >= 3
  ) {
    days += 1;
  }
  days += day;
  // 1971年1月1日是星期五，加上3之后刚好从星期一开始计算
  return week[(days + 3) % 7];
}
// @lc code=end
