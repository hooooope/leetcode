/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
// 暴力递归法
/* function change(amount: number, coins: number[]): number {
  const process = (amount: number, coins: number[], index: number) => {
    if (amount < 0) {
      return 0;
    }
    if (amount === 0) {
      return 1;
    }
    if (index === coins.length) {
      return 0;
    }
    let ret = 0;
    for (let i = 0; i * coins[index] <= amount; i++) {
      ret += process(amount - i * coins[index], coins, index + 1);
    }
    return ret;
  };
  return process(amount, coins, 0);
} */

// 记忆化搜索法
/* function change(amount: number, coins: number[]): number {
  const process = (
    amount: number,
    coins: number[],
    index: number,
    dp: number[][]
  ) => {
    if (amount < 0) {
      return 0;
    }
    if (dp[amount][index] !== -1) {
      return dp[amount][index];
    }
    if (amount === 0) {
      dp[amount][index] = 1;
    } else if (index === coins.length) {
      dp[amount][index] = 0;
    } else {
      let ret = 0;
      for (let i = 0; i * coins[index] <= amount; i++) {
        ret += process(amount - i * coins[index], coins, index + 1, dp);
      }
      dp[amount][index] = ret;
    }
    return dp[amount][index];
  };
  const dp: number[][] = new Array(amount + 1)
    .fill(0)
    .map(() => new Array(coins.length + 1).fill(-1));
  return process(amount, coins, 0, dp);
} */

// 严格表结构法
/* function change(amount: number, coins: number[]): number {
  const dp: number[][] = new Array(amount + 1)
    .fill(0)
    .map(() => new Array(coins.length + 1).fill(0));
  for (let j = 0; j <= coins.length; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    dp[i][coins.length] = 0;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = coins.length - 1; j >= 0; j--) {
      for (let k = 0; k * coins[j] <= i; k++) {
        dp[i][j] += dp[i - k * coins[j]][j + 1];
      }
    }
  }
  return dp[amount][0];
} */

// 严格表结构法（枚举优化）
/* function change(amount: number, coins: number[]): number {
  const dp: number[][] = new Array(amount + 1)
    .fill(0)
    .map(() => new Array(coins.length + 1).fill(0));
  for (let j = 0; j <= coins.length; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    dp[i][coins.length] = 0;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = coins.length - 1; j >= 0; j--) {
      dp[i][j] = dp[i][j + 1];
      if (i - coins[j] >= 0) {
        dp[i][j] += dp[i - coins[j]][j];
      }
    }
  }
  return dp[amount][0];
} */

function change(amount: number, coins: number[]): number {
  const dp: number[] = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    // 外层循环
    // 用第一个硬币作为最后一个硬币凑coins[0]元
    // 用第一个硬币作为最后一个硬币凑coins[0] + 1元
    // ...
    // 用第一个硬币作为最后一个硬币凑amount元
    // 外层循环
    // 用第二个硬币作为最后一个硬币凑coins[1]元
    // 用第二个硬币作为最后一个硬币凑coins[1] + 1元
    // ...
    // 用第二个硬币作为最后一个硬币凑amount元
    // 外层循环
    // ...
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
}
// @lc code=end
