/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
  let pre = -1;
  let ret = Number.MAX_VALUE;
  const travel = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    travel(root.left);
    if (pre === -1) {
      pre = root.val;
    } else {
      ret = Math.min(ret, root.val - pre);
      pre = root.val;
    }
    travel(root.right);
  };
  travel(root);
  return ret;
}
// @lc code=end
