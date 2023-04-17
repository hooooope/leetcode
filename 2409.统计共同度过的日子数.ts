/*
 * @lc app=leetcode.cn id=2409 lang=typescript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
/* function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number {
  let ret = 0;
  const arriveDate = arriveAlice > arriveBob ? arriveAlice : arriveBob;
  const leaveDate = leaveAlice < leaveBob ? leaveAlice : leaveBob;
  if (arriveDate > leaveDate) {
    return ret;
  }
  const arriveMonth = Number(arriveDate.slice(0, 2));
  const leaveMonth = Number(leaveDate.slice(0, 2));
  const arriveDay = Number(arriveDate.slice(3));
  const leaveDay = Number(leaveDate.slice(3));
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (arriveMonth === leaveMonth) {
    ret += leaveDay - arriveDay;
  } else {
    ret += month[arriveMonth - 1] - arriveDay;
    ret += leaveDay;
    for (let i = arriveMonth + 1; i < leaveMonth; i++) {
      ret += month[i - 1];
    }
  }
  return ret + 1;
} */

// 分别计算出每个日子是一年中的第几天后求差
function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string
): number {
  const calculateDayOfYear = (date: string, prefixSum: number[]) => {
    const month = parseInt(date.substring(0, 2));
    const day = parseInt(date.substring(3));
    return prefixSum[month - 1] + day;
  };
  const prefixSum = [0];
  const datesOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let i = 0; i < datesOfMonths.length; i++) {
    prefixSum.push(prefixSum[i] + datesOfMonths[i]);
  }
  const arriveAliceDay = calculateDayOfYear(arriveAlice, prefixSum);
  const leaveAliceDay = calculateDayOfYear(leaveAlice, prefixSum);
  const arriveBobDay = calculateDayOfYear(arriveBob, prefixSum);
  const leaveBobDay = calculateDayOfYear(leaveBob, prefixSum);
  return Math.max(
    0,
    Math.min(leaveAliceDay, leaveBobDay) -
      Math.max(arriveAliceDay, arriveBobDay) +
      1
  );
}
// @lc code=end
