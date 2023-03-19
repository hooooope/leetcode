/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
// 前序遍历和展开同步进行
/* function flatten(root: TreeNode | null): void {
  if (root === null) {
    return;
  }
  const stack: TreeNode[] = [root];
  let prev: TreeNode | null = null;
  while (stack.length) {
    const curr = stack.pop();
    if (prev) {
      prev.left = null;
      prev.right = curr;
    }
    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
    prev = curr;
  }
} */

// 寻找前驱节点
function flatten(root: TreeNode | null): void {
  let curr = root;
  while (curr) {
    if (curr.left) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
}
// @lc code=end
