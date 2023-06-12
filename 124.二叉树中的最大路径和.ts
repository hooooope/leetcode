/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
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
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
} */

function maxPathSum(root: TreeNode | null): number {
  const process = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    }
    const left = Math.max(process(root.left), 0);
    const right = Math.max(process(root.right), 0);
    const value = root.val + left + right;
    // 以root为根节点的最大路径和
    ret = Math.max(ret, value);
    // 以root为子节点的最大贡献值
    return root.val + Math.max(left, right);
  };
  let ret = -Infinity;
  process(root);
  return ret;
}
// @lc code=end
