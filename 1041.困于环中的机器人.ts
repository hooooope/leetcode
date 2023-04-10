/*
 * @lc app=leetcode.cn id=1041 lang=typescript
 *
 * [1041] 困于环中的机器人
 */

// @lc code=start
function isRobotBounded(instructions: string): boolean {
  // 当机器人执行完指令instructions后，它的位置和方向均有可能发生变化
  // 1.如果它的位置仍位于原点，那么不管它此时方向是什么，机器人都将永远无法离开
  // 2.如果它的位置不在原点，那么需要考虑此时机器人的方向
  // 2.1.如果机器人仍然朝北，那么机器人不会陷入循环
  // 2.2.如果机器人朝南，那么执行完第二串指令时，机器人的位移会与第一次相反，即第二次的位移是(-x,-y)，并且结束后会回到原来的方向
  // 2.3.如果机器人朝东，即右转了90度。这样一来，每执行一串指令，机器人都会右转90度。那么第一次和第三次指令的方向是相反的，第二次和第四次指令的方向是相反的，位移之和也为0，这样一来，每四次指令之后，机器人都会回到原点，并且方向朝北，机器人会陷入循环
  // 2.4.如果机器人朝西，也是一样的结果
  // 因此，机器人想要摆脱循环，在一串指令之后的状态，必须不是位于原点且方向朝北
  const direc = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let direcIndex = 0;
  let x = 0;
  let y = 0;
  for (const instruction of instructions) {
    switch (instruction) {
      case "G":
        x += direc[direcIndex][0];
        y += direc[direcIndex][1];
        break;
      case "L":
        direcIndex += 3;
        direcIndex %= 4;
        break;
      case "R":
        direcIndex++;
        direcIndex %= 4;
        break;
    }
  }
  return direcIndex !== 0 || (x === 0 && y === 0);
}
// @lc code=end
