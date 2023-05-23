/*
 * @lc app=leetcode.cn id=649 lang=typescript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
function predictPartyVictory(senate: string): string {
  const n = senate.length;
  const radiant: number[] = [];
  const dire: number[] = [];
  for (let i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }
  while (radiant.length && dire.length) {
    if (radiant[0] < dire[0]) {
      radiant.push(radiant[0] + n);
    } else {
      dire.push(dire[0] + n);
    }
    radiant.shift();
    dire.shift();
  }
  return radiant.length ? "Radiant" : "Dire";
}
// @lc code=end
