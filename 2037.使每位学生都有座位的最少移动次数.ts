/*
 * @lc app=leetcode.cn id=2037 lang=typescript
 *
 * [2037] 使每位学生都有座位的最少移动次数
 */

// @lc code=start
/* 
  1,3,5
  2,4,7

  1,4,5,9
  1,2,3,6

  2,2,6,6
  1,2,3,6
*/
function minMovesToSeat(seats: number[], students: number[]): number {
  let ret = 0;
  const n = seats.length;
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    ret += Math.abs(seats[i] - students[i]);
  }
  return ret;
}
// @lc code=end
