/*
 * @lc app=leetcode.cn id=1125 lang=typescript
 *
 * [1125] 最小的必要团队
 */

// @lc code=start
// 动态规划
/* function smallestSufficientTeam(
  req_skills: string[],
  people: string[][]
): number[] {
  const n = req_skills.length;
  const m = people.length;
  const skillIndex = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    skillIndex.set(req_skills[i], i);
  }
  // 题目输入数组req_skills的长度最大为16，req_skills中的每一项，被选择或者不被选择，总共的组合情况为2^16种。因此可以通过状态压缩来表示一个技能集合
  // 我们将每一个技能req_skills[i]映射到一个二进制数的第i位。例如：
  // req_skills[0]用2^0=(1<<0)=1来表示
  // req_skills[1]用2^1=(1<<1)=2来表示
  // dp[i]表示满足技能集合为i的最小人数的数组
  const dp: number[][] = new Array(1 << n);
  // 初始化状态是dp[0]，为空数组，因为如果不需要任何技能，不用任何人就可以完成
  dp[0] = [];
  // 我们首先依次遍历peoples
  for (let i = 0; i < m; i++) {
    // 求出当前这个人所有的技能集合cur_skill
    let cur_skill = 0;
    for (const s of people[i]) {
      cur_skill |= 1 << skillIndex.get(s)!;
    }
    // 然后遍历dp表中结果dp[prev]，其中原来的技能集合用prev来表示
    for (let prev = 0; prev < dp.length; prev++) {
      if (dp[prev] === undefined) {
        continue;
      }
      // 设加入当前这个人后新的技能集合是comb，由原来的技能集合和当前的技能集合求并集后，可以得到comb
      const comb = prev | cur_skill;
      // 如果之前不存在当前组合技能或
      // 当前组合技能需要的人数比之前少
      // 那么我们就需要更新dp[comb]为dp[prev]
      if (dp[comb] === undefined || dp[prev].length + 1 < dp[comb].length) {
        dp[comb] = [...dp[prev], i];
      }
    }
  }
  // 所有技能的集合用(1<<n)-1来表示
  return dp[(1 << n) - 1];
} */

// 动态规划+优化
function smallestSufficientTeam(
  req_skills: string[],
  people: string[][]
): number[] {
  const n = req_skills.length;
  const m = people.length;
  const skillIndex = new Map<string, number>();
  for (let i = 0; i < n; i++) {
    skillIndex.set(req_skills[i], i);
  }
  // 在方法一中，我们用dp[i]来表示状态，状态含义是满足技能集合为i的最小人数的数组，每一个状态都用数组记录了具体的人员编号
  // 这个过程浪费了很多空间去存储结果，也消耗了很多时间去生成数组
  // 实际上我们只需要记录下每个状态的产生来源，就可以按序还原每个状态具体人员编号的数组
  // dp[i]表示满足技能集合i的最小人数
  const dp: number[] = new Array(1 << n).fill(m);
  dp[0] = 0;
  // prev_skill[i]表示技能集合i是从prev_skill[i]转移来的
  // prev_people[i]表示技能集合i是通过加入员工prev_people[i]转移来的
  // 通过这样的方式，我们就记录了每一个状态的转移来源
  const prev_skill: number[] = new Array(1 << n);
  const prev_people: number[] = new Array(1 << n);
  for (let i = 0; i < m; i++) {
    let cur_skill = 0;
    for (const s of people[i]) {
      cur_skill |= 1 << skillIndex.get(s)!;
    }
    for (let prev = 0; prev < dp.length; prev++) {
      const comb = prev | cur_skill;
      if (dp[prev] + 1 < dp[comb]) {
        dp[comb] = dp[prev] + 1;
        // 记录每一个状态的转移来源
        prev_skill[comb] = prev;
        prev_people[comb] = i;
      }
    }
  }
  // 当我们要复原一个技能集合i的时候，我们可以找到最后一个员工prev_people[i]，把它加入结果中，然后赋值i为prev_skill[i]
  // 不断重复这个过程，直到i=0，表示我们已找到需要技能集合的最少员工
  const ret: number[] = [];
  let skills = (1 << n) - 1;
  while (skills > 0) {
    ret.push(prev_people[skills]);
    skills = prev_skill[skills];
  }
  return ret;
}
// @lc code=end
