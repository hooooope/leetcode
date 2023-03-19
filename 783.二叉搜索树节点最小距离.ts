/*
 * @lc app=leetcode.cn id=783 lang=typescript
 *
 * [783] 二叉搜索树节点最小距离
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

function minDiffInBST(root: TreeNode | null): number {
  let ret = Number.MAX_VALUE;
  let pre = -1;
  const travel = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    travel(root.left);
    if (pre !== -1) {
      ret = Math.min(ret, root.val - pre);
    }
    pre = root.val;
    travel(root.right);
  };
  travel(root);
  return ret;
}
// @lc code=end
