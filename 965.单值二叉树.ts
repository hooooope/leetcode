/*
 * @lc app=leetcode.cn id=965 lang=typescript
 *
 * [965] 单值二叉树
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

// dfs
/* function isUnivalTree(root: TreeNode | null): boolean {
  const val = root.val;
  const travel = (root: TreeNode | null) => {
    if (root === null) {
      return true;
    }
    if (root.val !== val) {
      return false;
    }
    return travel(root.left) && travel(root.right);
  };
  return travel(root);
} */

// dfs
function isUnivalTree(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  if (root.left) {
    if (root.left.val !== root.val || !isUnivalTree(root.left)) {
      return false;
    }
  }
  if (root.right) {
    if (root.right.val !== root.val || !isUnivalTree(root.right)) {
      return false;
    }
  }
  return true;
}
// @lc code=end
