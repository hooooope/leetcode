/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

import { isParseTreeNode } from "typescript";

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

/* function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (
    nums: number[],
    left: number,
    right: number
  ): TreeNode | null => {
    if (left > right) {
      return null;
    }
    const mid = (left + right) >> 1;
    return new TreeNode(
      nums[mid],
      helper(nums, left, mid - 1),
      helper(nums, mid + 1, right)
    );
  };
  return helper(nums, 0, nums.length - 1);
} */

/* function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (
    nums: number[],
    left: number,
    right: number
  ): TreeNode | null => {
    if (left > right) {
      return null;
    }
    const mid = (left + right + 1) >> 1;
    // const mid = Math.ceil((left + right) / 2);
    return new TreeNode(
      nums[mid],
      helper(nums, left, mid - 1),
      helper(nums, mid + 1, right)
    );
  };
  return helper(nums, 0, nums.length - 1);
} */

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const helper = (
    nums: number[],
    left: number,
    right: number
  ): TreeNode | null => {
    if (left > right) {
      return null;
    }
    const mid = (left + right + Math.round(Math.random())) >> 1;
    return new TreeNode(
      nums[mid],
      helper(nums, left, mid - 1),
      helper(nums, mid + 1, right)
    );
  };
  return helper(nums, 0, nums.length - 1);
}
// @lc code=end
