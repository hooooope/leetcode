/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

// 深度优先（递归）
/* function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  } else if (p.val !== q.val) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
} */

// 广度优先（迭代）
/* function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  }
  const queue1: TreeNode[] = [];
  const queue2: TreeNode[] = [];
  queue1.push(p);
  queue2.push(q);
  while (queue1.length && queue2.length) {
    const node1 = queue1.pop();
    const node2 = queue2.pop();
    if (node1.val !== node2.val) {
      return false;
    }
    const left1 = node1.left;
    const right1 = node1.right;
    const left2 = node2.left;
    const right2 = node2.right;
    if (Number(!left1) ^ Number(!left2)) {
      return false;
    }
    if (Number(!right1) ^ Number(!right2)) {
      return false;
    }
    if (left1) {
      queue1.push(left1);
    }
    if (right1) {
      queue1.push(right1);
    }
    if (left2) {
      queue2.push(left2);
    }
    if (right2) {
      queue2.push(right2);
    }
  }
  return true;
  // return !queue1.length && !queue2.length;
} */
// @lc code=end
