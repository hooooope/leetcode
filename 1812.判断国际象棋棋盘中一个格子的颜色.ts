/*
 * @lc app=leetcode.cn id=1812 lang=typescript
 *
 * [1812] 判断国际象棋棋盘中一个格子的颜色
 */

// @lc code=start
/* function squareIsWhite(coordinates: string): boolean {
  const row = Number(coordinates[1]);
  const col = coordinates[0].charCodeAt(0) - "a".charCodeAt(0) + 1;
  // 从下往上，奇数行第一个格子为黑色，偶数行第一个格子为白色
  // 奇数行的奇数列为黑色（false），偶数列为白色（true）
  // 偶数行的奇数列为白色（true），偶数列为黑色（false）
  if (row % 2 === 0) {
    if (col % 2 === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    if (col % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
} */

/* 
  数学法：
  从左下角开始，
  棋盘的行数和列数之和如果为奇数，则为白色格子，
  如果和为偶数，则为黑色格子
*/
function squareIsWhite(coordinates: string): boolean {
  return (
    (coordinates[0].charCodeAt(0) -
      "a".charCodeAt(0) +
      1 +
      Number(coordinates[1])) %
      2 ===
    1
  );
}
// @lc code=end
