/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  const depth = (root: TreeNode | null) => {
    if (!root) {
      return 0;
    }
    const left = depth(root.left);
    const right = depth(root.right);
    ret = Math.max(ret, left + right + 1);
    return Math.max(left, right) + 1;
  };

  let ret = 1; // 经历过的节点数
  depth(root);
  return ret - 1; // 路径长度 = 经历过的节点数 - 1
}
// @lc code=end
