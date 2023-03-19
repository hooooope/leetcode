/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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
/* function inorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const inorder = (root: TreeNode | null) => {
    if (!root) return;
    inorder(root.left);
    ret.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return ret;
} */

// 迭代
/* function inorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const stk: TreeNode[] = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    ret.push(root.val);
    root = root.right;
  }
  return ret;
} */

/* 
  Morris遍历
  1.x无左孩子，将x加入结果，x = x.right
  2.x有左孩子，寻找predecessor（predecessor.right !== x）
    2.1.predecessor有右孩子，
    2.2.predecessor无右孩子，predecessor.right = x
*/
function inorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  while (root) {
    if (root.left) {
      let predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        predecessor.right = root;
        root = root.left;
        continue;
      } else {
        ret.push(root.val);
        predecessor.right = null;
      }
    } else {
      ret.push(root.val);
    }
    root = root.right;
  }
  return ret;
}
// @lc code=end
