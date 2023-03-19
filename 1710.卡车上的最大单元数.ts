/*
 * @lc app=leetcode.cn id=1710 lang=typescript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  let ret = 0;
  boxTypes.sort((a, b) => b[1] - a[1]);
  for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
    if (numberOfBoxes < truckSize) {
      ret += numberOfBoxes * numberOfUnitsPerBox;
      truckSize -= numberOfBoxes;
    } else {
      ret += truckSize * numberOfUnitsPerBox;
      break;
    }
  }
  return ret;
}
// @lc code=end
