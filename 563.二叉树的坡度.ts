/*
 * @lc app=leetcode.cn id=563 lang=typescript
 *
 * [563] 二叉树的坡度
 */

import { timeLog } from "console";

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

function findTilt(root: TreeNode | null): number {
  let ret = 0;
  const travel = (root: TreeNode) => {
    if (!root) {
      return 0;
    }
    const leftSum = travel(root.left);
    const rightSum = travel(root.right);
    ret += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + root.val;
  };
  travel(root);
  return ret;
}
// @lc code=end
