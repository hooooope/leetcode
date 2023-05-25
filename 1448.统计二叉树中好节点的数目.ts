/*
 * @lc app=leetcode.cn id=1448 lang=typescript
 *
 * [1448] 统计二叉树中好节点的数目
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
/* class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
} */

function goodNodes(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null, max: number): number => {
    if (root === null) {
      return 0
    }
    const ret = max > root.val ? 0 : 1
    const left = dfs(root.left, Math.max(max, root.val))
    const right = dfs(root.right, Math.max(max, root.val))
    return ret + left + right
  }
  return dfs(root, -Infinity)
};
// @lc code=end

