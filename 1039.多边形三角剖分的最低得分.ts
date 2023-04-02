/*
 * @lc app=leetcode.cn id=1039 lang=typescript
 *
 * [1039] 多边形三角剖分的最低得分
 */

// @lc code=start
// 记忆化搜索
function minScoreTriangulation(values: number[]): number {
  const n = values.length;
  const memo = new Map<number, number>();
  // dp[i][j]的值为顶点i,i+1,...,j-1,j构成的凸j-i+1边形进行三角形剖分后可以得到的最低分
  const dp = (i: number, j: number): number => {
    // 无法剖分三角形
    if (i + 2 > j) {
      return 0;
    }
    // 凸多边形退化为三角形
    if (i + 2 === j) {
      return values[i] * values[i + 1] * values[j];
    }
    // 其他情况下，需要进行剖分
    // 假设剖分得到的三角形中，顶点i,j和另一个顶点k(i<k<j)构成了一个三角形，那么三角形ikj就将这个凸多边形分成了三部分
    // 利用memo.get(i*n+j)来代替memo[i][j]，降低空间复杂度
    const key = i * n + j;
    // 通过记忆化搜索来完成
    if (!memo.has(key)) {
      let minScore = Number.MAX_VALUE;
      // 凸边形的值就是这三部分的值之和，可以通过遍历k的值，来求出多边形的最小值
      // 而第二部分和第三部分的值，也可以通过相同的方法求得最小值
      for (let k = i + 1; k < j; k++) {
        minScore = Math.min(
          minScore,
          // 1.顶点i,k,j构成的三角形
          // 2.顶点i,i+1,...,k-1,k构成的凸k-i+1边形。当k=i+1时，这部分不存在
          // 3.顶点k,k+1,...,j-1,j构成的凸j-k+1边形。当j=k+1时，这部分不存在
          values[i] * values[k] * values[j] + dp(i, k) + dp(k, j)
        );
      }
      memo.set(key, minScore);
    }
    return memo.get(key)!;
  };
  return dp(0, n - 1);
}
// @lc code=end
