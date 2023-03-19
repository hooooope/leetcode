/*
 * @lc app=leetcode.cn id=935 lang=typescript
 *
 * [935] 骑士拨号器
 */

// @lc code=start
function knightDialer(n: number): number {
  const MOD = 10 ** 9 + 7;
  // moves[i]表示骑士处于位置i可以到达的下一个位置
  const moves = [
    [4, 6],
    [6, 8],
    [7, 9],
    [4, 8],
    [3, 9, 0],
    [],
    [1, 7, 0],
    [2, 6],
    [1, 3],
    [2, 4],
  ];
  // 初始化，执行0次移动来获得长度为1的号码
  let dp: number[] = new Array(10).fill(1);
  // 执行n-1次移动来获得长度为n的号码
  for (let i = 0; i < n - 1; i++) {
    // dp2[j]表示骑士从位置j出发，跳跃i次，有多少种跳跃方式
    const dp2 = new Array(10).fill(0);
    // 将骑士放置在任何数字单元格上
    for (let j = 0; j < 10; j++) {
      // 象棋骑士在当前位置j以独特的移动方式可以到达的位置nei
      for (const nei of moves[j]) {
        dp2[nei] += dp[j];
        dp2[nei] %= MOD;
      }
    }
    // 滚动数组，供下一次跳跃使用
    dp = dp2;
  }
  let ret = 0;
  for (let i = 0; i < dp.length; i++) {
    ret += dp[i];
  }
  return ret % MOD;
}
// @lc code=end
