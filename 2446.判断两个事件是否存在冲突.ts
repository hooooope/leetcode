/*
 * @lc app=leetcode.cn id=2446 lang=typescript
 *
 * [2446] 判断两个事件是否存在冲突
 */

// @lc code=start
/* function haveConflict(event1: string[], event2: string[]): boolean {
  const time2Val = (time: string) => {
    const sb = time.split(":")
    return Number(sb[0]) * 60 + Number(sb[1])
  }
  return !(time2Val(event1[0]) > time2Val(event2[1]) ||
  time2Val(event1[1]) < time2Val(event2[0]))
}; */

function haveConflict(event1: string[], event2: string[]): boolean {
  return !(event1[0] > event2[1] || event1[1] < event2[0])
};
// @lc code=end

