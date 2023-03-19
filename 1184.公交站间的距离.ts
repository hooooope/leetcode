/*
 * @lc app=leetcode.cn id=1184 lang=typescript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  if (start > destination) {
    const temp = start;
    start = destination;
    destination = temp;
  }
  let distance1 = 0;
  let distance2 = 0;
  for (let i = 0; i < distance.length; i++) {
    if (i >= start && i < destination) {
      distance1 += distance[i];
    } else {
      distance2 += distance[i];
    }
  }
  return Math.min(distance1, distance2);
}
// @lc code=end
