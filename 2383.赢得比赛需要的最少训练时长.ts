/*
 * @lc app=leetcode.cn id=2383 lang=typescript
 *
 * [2383] 赢得比赛需要的最少训练时长
 */

// @lc code=start
function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[]
): number {
  let ret = 0;
  const n = energy.length;
  for (let i = 0; i < n; i++) {
    initialEnergy -= energy[i];
    if (initialExperience <= experience[i]) {
      ret += experience[i] - initialExperience + 1;
      initialExperience += experience[i] - initialExperience + 1;
    }
    initialExperience += experience[i];
  }
  if (initialEnergy < 1) {
    ret += Math.abs(initialEnergy) + 1;
  }
  return ret;
}
// @lc code=end
