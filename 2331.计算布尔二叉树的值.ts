/*
 * @lc app=leetcode.cn id=2331 lang=typescript
 *
 * [2331] 计算布尔二叉树的值
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

function evaluateTree(root: TreeNode | null): boolean {
  if (root.left === null && root.right === null) {
    return root.val === 0 ? false : true;
  }
  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  } else {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }
}
// @lc code=end
