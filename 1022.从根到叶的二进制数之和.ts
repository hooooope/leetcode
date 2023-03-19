/*
 * @lc app=leetcode.cn id=1022 lang=typescript
 *
 * [1022] 从根到叶的二进制数之和
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

// dfs
/* function sumRootToLeaf(root: TreeNode | null): number {
  const dfs = (root: TreeNode | null, acc: number): number => {
    if (root === null) {
      return 0;
    }
    acc = (acc << 1) | root.val;
    if (root.left === null && root.right === null) {
      return acc;
    }
    return dfs(root.left, acc) + dfs(root.right, acc);
  };
  return dfs(root, 0);
} */

// bfs
/* function sumRootToLeaf(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let ret = 0;
  const queue: [TreeNode, number][] = [];
  queue.push([root, root.val]);
  while (queue.length) {
    const [node, acc] = queue.pop()!;
    if (node.left === null && node.right === null) {
      ret += acc;
      continue;
    }
    if (node.left) {
      queue.push([node.left, (acc << 1) | node.left.val]);
    }
    if (node.right) {
      queue.push([node.right, (acc << 1) | node.right.val]);
    }
  }
  return ret;
} */

// 迭代（先序遍历）
function sumRootToLeaf(root: TreeNode | null): number {
  let ret = 0;
  let val = 0;
  let prev: TreeNode | null = null;
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      val = (val << 1) | root.val;
      root = root.left;
    }
    root = stack[stack.length - 1];
    if (root.right === null || root.right === prev) {
      if (root.left === null && root.right === null) {
        ret += val;
      }
      val >>= 1;
      stack.pop();
      prev = root;
      root = null;
    } else {
      root = root.right;
    }
  }
  return ret;
}
// @lc code=end
