/*
 * @lc app=leetcode.cn id=979 lang=typescript
 *
 * [979] 在二叉树中分配硬币
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

function distributeCoins(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null) => {
    if (root === null) {
      return 0;
    }
    // left>0表示左子节点需要向当前节点移动left个节点
    // left<0表示当前节点需要向左子节点移动-left个节点
    const left = dfs(root.left);
    const right = dfs(root.right);
    ret += Math.abs(left) + Math.abs(right);
    return left + right + root.val - 1;
  };
  let ret = 0;
  dfs(root);
  return ret;
}
// @lc code=end
