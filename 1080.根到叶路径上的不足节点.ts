/*
 * @lc app=leetcode.cn id=1080 lang=typescript
 *
 * [1080] 根到叶路径上的不足节点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// DFS
function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  const dfs = (root: TreeNode | null, sum: number, limit: number): boolean => {
    if (root === null) {
      return false
    }
    if (root.left === null && root.right === null) {
      return sum + root.val >= limit
    }
    const left = dfs(root.left, sum + root.val, limit)
    if (!left) {
      root.left = null
    }
    const right = dfs(root.right, sum + root.val, limit)
    if (!right) {
      root.right = null
    }
    return left || right
  }
  return dfs(root, 0, limit) ? root : null
};

// @lc code=end

