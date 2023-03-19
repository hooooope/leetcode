/*
 * @lc app=leetcode.cn id=993 lang=typescript
 *
 * [993] 二叉树的堂兄弟节点
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
/* function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let x_depth: number | null = null;
  let x_parent: TreeNode | null = null;
  let x_found = false;
  let y_depth: number | null = null;
  let y_parent: TreeNode | null = null;
  let y_found = false;
  const dfs = (
    root: TreeNode | null,
    depth: number,
    parent: TreeNode | null
  ) => {
    if (root === null) {
      return;
    }
    if (root.val === x) {
      x_depth = depth;
      x_parent = parent;
      x_found = true;
    } else if (root.val === y) {
      y_depth = depth;
      y_parent = parent;
      y_found = true;
    }
    if (x_found && y_found) {
      return;
    }
    dfs(root.left, depth + 1, root);
    if (x_found && y_found) {
      return;
    }
    dfs(root.right, depth + 1, root);
  };
  dfs(root, 0, null);
  return x_depth === y_depth && x_parent !== y_parent;
} */

// bfs
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let x_depth: number | null = null;
  let x_parent: TreeNode | null = null;
  let x_found = false;
  let y_depth: number | null = null;
  let y_parent: TreeNode | null = null;
  let y_found = false;
  const queue: [TreeNode, number][] = [];
  const update = (node: TreeNode, depth: number, parent: TreeNode) => {
    if (node.val === x) {
      x_depth = depth;
      x_parent = parent;
      x_found = true;
    } else if (node.val === y) {
      y_depth = depth;
      y_parent = parent;
      y_found = true;
    }
  };
  queue.push([root, 0]);
  while (queue.length) {
    const [node, depth] = queue.shift()!;
    if (node.left) {
      queue.push([node.left, depth + 1]);
      // 在出队时判断是否找到目标节点，需要额外保存父节点
      // 而在入队时判断是否找到目标节点，可以直接获得父节点
      update(node.left, depth + 1, node);
    }
    if (node.right) {
      queue.push([node.right, depth + 1]);
      update(node.right, depth + 1, node);
    }
    if (x_found && y_found) {
      break;
    }
  }
  return x_depth === y_depth && x_parent !== y_parent;
}
// @lc code=end
