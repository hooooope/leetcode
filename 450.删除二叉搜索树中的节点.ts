/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

// 递归
/* function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) {
    return root;
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    }
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    let successor = root.right;
    while (successor.left) {
      successor = successor.left;
    }
    root.right = deleteNode(root.right, successor.val);
    successor.right = root.right;
    successor.left = root.left;
    return successor;
  }
} */

// 迭代
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  let current = root;
  let parent: TreeNode | null = null;
  while (current && current.val !== key) {
    parent = current;
    if (current.val > key) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  if (!current) {
    return root;
  }
  if (!current.left && !current.right) {
    current = null;
  } else if (!current.left) {
    current = current.right;
  } else if (!current.right) {
    current = current.left;
  } else {
    let successor = current.right;
    let successorParent = current;
    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }
    if (successorParent.val === current.val) {
      current.right = successor.right;
    } else {
      successorParent.left = successor.right;
    }
    successor.right = current.right;
    successor.left = current.left;
    current = successor;
  }
  if (!parent) {
    return current;
  } else {
    if (parent.left && parent.left.val === key) {
      parent.left = current;
    } else {
      parent.right = current;
    }
    return root;
  }
}
// @lc code=end
