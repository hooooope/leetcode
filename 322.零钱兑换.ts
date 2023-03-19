/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
// 暴力递归法（超时）
/* function coinChange(coins: number[], amount: number): number {
  const process = (coins: number[], amount: number, index: number) => {
    if (amount === 0) {
      return 0;
    }
    if (index === coins.length) {
      return Number.MAX_VALUE;
    }
    let ret = Number.MAX_VALUE;
    for (let i = 0; i * coins[index] <= amount; i++) {
      ret = Math.min(
        ret,
        process(coins, amount - i * coins[index], index + 1) + i
      );
    }
    return ret;
  };
  const ret = process(coins, amount, 0);
  return ret === Number.MAX_VALUE ? -1 : ret;
} */

// 记忆化搜索法
/* function coinChange(coins: number[], amount: number): number {
  const process = (
    coins: number[],
    amount: number,
    index: number,
    dp: number[][]
  ) => {
    if (dp[amount][index] !== -1) {
      return dp[amount][index];
    }
    if (amount === 0) {
      dp[amount][index] = 0;
    } else if (index === coins.length) {
      dp[amount][index] = Number.MAX_VALUE;
    } else {
      let ret = Number.MAX_VALUE;
      for (let i = 0; i * coins[index] <= amount; i++) {
        ret = Math.min(
          ret,
          process(coins, amount - i * coins[index], index + 1, dp) + i
        );
      }
      dp[amount][index] = ret;
    }
    return dp[amount][index];
  };
  const dp: number[][] = new Array(amount + 1)
    .fill(0)
    .map(() => new Array(coins.length + 1).fill(-1));
  const ret = process(coins, amount, 0, dp);
  return ret === Number.MAX_VALUE ? -1 : ret;
} */

// 严格表结构法
/* function coinChange(coins: number[], amount: number): number {
  const dp: number[][] = new Array(amount + 1)
    .fill(0)
    .map(() => new Array(coins.length + 1).fill(-1));
  for (let i = 1; i <= amount; i++) {
    dp[i][coins.length] = Number.MAX_VALUE;
  }
  for (let j = 0; j <= coins.length; j++) {
    dp[0][j] = 0;
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = coins.length - 1; j >= 0; j--) {
      dp[i][j] = Number.MAX_VALUE;
      for (let k = 0; k * coins[j] <= i; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i - k * coins[j]][j + 1] + k);
      }
    }
  }
  return dp[amount][0] === Number.MAX_VALUE ? -1 : dp[amount][0];
} */

// 暴力递归法
/* function coinChange(coins: number[], amount: number): number {
  const process = (coins: number[], amount: number) => {
    if (amount < 0) {
      return -1;
    }
    if (amount === 0) {
      return 0;
    }
    let min = Number.MAX_VALUE;
    for (const coin of coins) {
      const ret = process(coins, amount - coin);
      if (ret >= 0 && ret < min) {
        min = 1 + ret;
      }
    }
    return min;
  };
  const ret = process(coins, amount);
  return ret === Number.MAX_VALUE ? -1 : ret;
} */

// 记忆化搜索法
/* function coinChange(coins: number[], amount: number): number {
  const process = (coins: number[], amount: number, dp: number[]) => {
    if (amount < 0) {
      return -1;
    }
    if (amount === 0) {
      return 0;
    }
    if (dp[amount] !== 0) {
      return dp[amount];
    }
    let min = Number.MAX_VALUE;
    for (const coin of coins) {
      const ret = process(coins, amount - coin, dp);
      if (ret >= 0 && ret < min) {
        min = 1 + ret;
      }
    }
    dp[amount] = min;
    return min;
  };
  const dp: number[] = new Array(amount + 1).fill(0);
  const ret = process(coins, amount, dp);
  return ret === Number.MAX_VALUE ? -1 : ret;
} */

// 严格表结构法
function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}
// @lc code=end
