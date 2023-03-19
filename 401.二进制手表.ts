/*
 * @lc app=leetcode.cn id=401 lang=typescript
 *
 * [401] 二进制手表
 */

// @lc code=start
/* function readBinaryWatch(turnedOn: number): string[] {
  const ret: string[] = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (
        h.toString(2).split("0").join("").length +
          m.toString(2).split("0").join("").length ===
        turnedOn
      ) {
        ret.push(`${h}:${m < 10 ? "0" : ""}${m}`);
      }
    }
  }
  return ret;
} */

function readBinaryWatch(turnedOn: number): string[] {
  const ret: string[] = [];
  for (let i = 0; i < 1024; i++) {
    const h = i >> 6;
    const m = i & 63;
    if (
      h < 12 &&
      m < 60 &&
      i.toString(2).split("0").join("").length === turnedOn
    ) {
      ret.push(`${h}:${m < 10 ? "0" : ""}${m}`);
    }
  }
  return ret;
}
// @lc code=end
