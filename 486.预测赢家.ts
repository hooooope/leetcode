/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
// 递归
/* function PredictTheWinner(nums: number[]): boolean {
  const f = (nums: number[], i: number, j: number): number => {
    if (i === j) {
      return nums[i];
    }
    return Math.max(nums[i] + s(nums, i + 1, j), nums[j] + s(nums, i, j - 1));
  };
  const s = (nums: number[], i: number, j: number): number => {
    if (i === j) {
      return 0;
    }
    return Math.min(f(nums, i + 1, j), f(nums, i, j - 1));
  };
  return f(nums, 0, nums.length - 1) >= s(nums, 0, nums.length - 1);
} */

/* function PredictTheWinner(nums: number[]): boolean {
  // turn：1表示先手得分，2表示后手得分
  const total = (
    nums: number[],
    start: number,
    end: number,
    turn: number
  ): number => {
    if (start === end) {
      return nums[start];
    }
    // 选择第一张牌的得分
    const scoreStart = nums[start] * turn + total(nums, start + 1, end, -turn);
    // 选择最后一张牌的得分
    const scoreEnd = nums[end] * turn + total(nums, start, end - 1, -turn);
    // 求后手得分时，先将得分转为正数求最大值，再置为负数
    return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
  };
  // 计算先手得分与后手得分之差（先手分数为正，后手分数为负）
  // 如果总分大于等于0，则先手获胜，反而则后手获胜
  return total(nums, 0, nums.length - 1, 1) >= 0;
} */

// 动态规划
/* function PredictTheWinner(nums: number[]): boolean {
  const n = nums.length;
  // dp[i][j]表示当数组剩下的部分为下标i到下标j时，
  // 当前玩家与另一个玩家的分数之差的最大值（即领先多少分）
  // 注意当前玩家不一定是先手
  const dp: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // 当i=j时，只剩一个数字，当前玩家只能拿取这个数字
  for (let i = 0; i < n; i++) {
    dp[i][i] = nums[i];
  }
  // 当i<j时，当前玩家可以选择nums[i]或nums[j]
  // 然后轮到另一个玩家在数组剩下的部分选取数字
  // 当i>j时，dp[i][j]没有意义
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // 玩家在[i~j]上的最大得分为（可能为正数，也可能为负数）
      // 1.第一张牌nums[i]的得分减去另一个玩家在[i+1~j]上的最大得分
      // 2.最后一张牌nums[j]的得分减去另一个玩家在[i~j-1]上的最大得分
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  return dp[0][n - 1] >= 0;
} */

// 动态规划（空间优化）
// 上述代码中，dp[i][j]的值只和dp[i+1][j]与dp[i][j-1]有关
// 即在计算dp的第i行值时，只需使用到第i行和第i+1行的值
// 因此可以使用一维数组代替二维数组，对空间进行优化
function PredictTheWinner(nums: number[]): boolean {
  const n = nums.length;
  const dp: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = nums[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
    }
  }
  return dp[n - 1] >= 0;
}
// @lc code=end
