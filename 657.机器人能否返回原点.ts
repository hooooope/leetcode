/*
 * @lc app=leetcode.cn id=657 lang=typescript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/* function judgeCircle(moves: string): boolean {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    switch (move) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "L":
        x--;
        break;
      case "R":
        x++;
    }
  }
  return x === 0 && y === 0;
} */

function judgeCircle(moves: string): boolean {
  const map = new Map<string, number>();
  for (const move of moves) {
    map.set(move, (map.get(move) ?? 0) + 1);
  }
  return map.get("U") === map.get("D") && map.get("L") === map.get("R");
}
// @lc code=end
