/*
 * @lc app=leetcode.cn id=1130 lang=typescript
 *
 * [1130] 叶值的最小代价生成树
 */

// @lc code=start
// 动态规划
/* function mctFromLeafValues(arr: number[]): number {
  const n = arr.length;
  // dp[i][j]表示由arr{i:j}为叶子节点生成的二叉树中非叶子节点的值的最小可能总和
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
  // mval[i][j]表示arr{i:j}中的最大值
  const mval = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    // 单个节点无法生成二叉树，所以最小可能总和为0
    dp[i][i] = 0;
    mval[i][i] = arr[i];
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      mval[i][j] = Math.max(arr[i], mval[i + 1][j]);
      // 将arr{i:j}切分成任意两个非空子数组，分别对应左子树和右子树
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k + 1][j] + mval[i][k] * mval[k + 1][j]
        );
      }
    }
  }
  return dp[0][n - 1];
} */

/* 
  单调栈
  
  1.选择arr两个相邻的值，即两个节点，将它们作为一个新节点的左子节点和右子节点
  2。将这个新节点在数组arr替代这两个节点
  3.如果arr剩余的元素数目大于1，执行步骤1，否则终止，那么剩余的节点就是构建的二叉树的根节点

  问题可以转化为：给定一个数组arr，不断地合并相邻的数，合并代价为两个数的乘积，
  合并之后的数为两个数的最大值，直到数组只剩一个数，求最小合并代价和

  假设一个数arr[i]，满足arr[i-1]>=arr[i]<=arr[i+1]，
  如果arr[i-1]<=arr[i+1]，那么优先将arr[i]与arr[i-1]合并是最优的，
  反之如果arr[i-1]>arr[i+1]，那么优先将arr[i]与arr[i+1]合并是最优的
*/
function mctFromLeafValues(arr: number[]): number {
  let ret = 0;
  // 栈元素从底到顶是严格递减的
  const stack: number[] = [];
  for (const x of arr) {
    // 如果栈非空且栈顶元素小于等于x，那么说明栈顶元素是符合前面所说的最优合并的条件，将栈顶元素y出栈
    while (stack.length && stack[stack.length - 1] <= x) {
      const y = stack.pop()!;
      if (!stack.length || stack[stack.length - 1] > x) {
        // 如果栈空或栈顶元素大于x，那么将y与x合并，合并代价为x*y，合并之后的值为x
        ret += x * y;
      } else {
        // 否则将y与栈顶元素合并，合并代价为y与栈顶元素的乘积，合并之后的值为栈顶元素
        ret += stack[stack.length - 1] * y;
      }
    }
    stack.push(x);
  }
  while (stack.length > 1) {
    const x = stack.pop()!;
    ret += stack[stack.length - 1] * x;
  }
  return ret;
}
// @lc code=end
