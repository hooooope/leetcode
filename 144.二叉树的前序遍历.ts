/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

// 递归
/* function preorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const helper = (root: TreeNode, path: number[]) => {
    if (!root) return;
    path.push(root.val);
    helper(root.left, path);
    helper(root.right, path);
  };
  helper(root, ret);
  return ret;
} */

// 迭代
/* function preorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const stk: TreeNode[] = [];
  while (root || stk.length) {
    while (root) {
      ret.push(root.val);
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    root = root.right;
  }
  return ret;
} */

// Morris
function preorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  while (root) {
    if (root.left) {
      let predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (predecessor.right) {
        predecessor.right = null;
        root = root.right;
      } else {
        ret.push(root.val);
        predecessor.right = root;
        root = root.left;
      }
    } else {
      ret.push(root.val);
      root = root.right;
    }
  }
  return ret;
}
// @lc code=end
