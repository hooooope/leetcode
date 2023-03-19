/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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
/* function postorderTraversal(root: TreeNode | null): number[] {
  const ret: number[] = [];
  const helper = (root: TreeNode, path: number[]) => {
    if (!root) return;
    helper(root.left, path);
    helper(root.right, path);
    ret.push(root.val);
  };
  helper(root, ret);
  return ret;
} */

// 迭代
/* function postorderTraversal(root: TreeNode | null): number[] {
  let pre = null; // 上一次访问过的节点
  const ret: number[] = [];
  const stk: TreeNode[] = [];
  while (root || stk.length) {
    while (root) {
      stk.push(root);
      root = root.left;
    }
    root = stk.pop();
    if (!root.right || root.right === pre) {
      ret.push(root.val);
      pre = root;
      root = null;
    } else {
      stk.push(root);
      root = root.right;
    }
  }
  return ret;
} */

// Morris
/* function postorderTraversal(root: TreeNode | null): number[] {
  const printEdge = (root: TreeNode, ret: number[]) => {
    const tail = reverseEdge(root);
    let current = tail;
    while (current) {
      ret.push(current.val);
      current = current.right;
    }
    reverseEdge(tail);
  };
  const reverseEdge = (root: TreeNode) => {
    let prev: TreeNode | null = null;
    let next: TreeNode | null = null;
    while (root) {
      next = root.right;
      root.right = prev;
      prev = root;
      root = next;
    }
    return prev;
  };
  const ret: number[] = [];
  let current: TreeNode | null = root;
  while (current) {
    let mostRight = current.left;
    if (mostRight) {
      // 有左孩子
      while (mostRight.right && mostRight.right !== current) {
        mostRight = mostRight.right;
      }
      if (mostRight.right) {
        // 第二次访问当前节点
        mostRight.right = null;
        printEdge(current.left, ret);
      } else {
        // 第一次访问当前节点
        mostRight.right = current;
        current = current.left;
        continue;
      }
    }
    // 无左孩子
    current = current.right;
  }
  printEdge(root, ret);
  return ret;
} */

// Morris
function postorderTraversal(root: TreeNode | null): number[] {
  const addPath = (root: TreeNode, ret: number[]) => {
    let count = 0;
    while (root) {
      ret.push(root.val);
      root = root.right;
      count++;
    }
    let left = ret.length - count;
    let right = ret.length - 1;
    while (left < right) {
      const temp = ret[left];
      ret[left] = ret[right];
      ret[right] = temp;
      left++;
      right--;
    }
  };
  const ret: number[] = [];
  let current: TreeNode | null = root;
  while (current) {
    let mostRight = current.left;
    if (mostRight) {
      // 有左孩子
      while (mostRight.right && mostRight.right !== current) {
        mostRight = mostRight.right;
      }
      if (mostRight.right) {
        // 第二次访问当前节点
        mostRight.right = null;
        addPath(current.left, ret);
      } else {
        // 第一次访问当前节点
        mostRight.right = current;
        current = current.left;
        continue;
      }
    }
    // 无左孩子
    current = current.right;
  }
  addPath(root, ret);
  return ret;
}
// @lc code=end
