/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

// 自顶向下递归（前序遍历）
/* function isBalanced(root: TreeNode | null): boolean {
  const height = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    }
    return Math.max(height(root.left), height(root.right)) + 1;
  };
  if (root === null) {
    return true;
  }
  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
} */

// 自底向上递归（后序遍历）
function isBalanced(root: TreeNode | null): boolean {
  const height = (root: TreeNode | null): number => {
    if (root === null) {
      return 0;
    }
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    if (
      Math.abs(leftHeight - rightHeight) > 1 ||
      leftHeight === -1 ||
      rightHeight === -1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  };
  return height(root) >= 0;
}

// 自底向上递归（后序遍历）
/* interface IResult {
  isAVL: boolean;
  height: number;
}
function isBalanced(root: TreeNode | null): boolean {
  const process = (root: TreeNode | null): IResult => {
    if (root === null) {
      return {
        isAVL: true,
        height: 0,
      };
    }
    const leftRet = process(root.left);
    const rightRet = process(root.right);
    return {
      isAVL:
        leftRet.isAVL &&
        rightRet.isAVL &&
        Math.abs(leftRet.height - rightRet.height) <= 1,
      height: Math.max(leftRet.height, rightRet.height) + 1,
    };
  };
  return process(root).isAVL;
} */
// @lc code=end
