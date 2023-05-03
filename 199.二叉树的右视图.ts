/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

// DFS
/* function rightSideView(root: TreeNode | null): number[] {
  // depth -> rightmost node.val
  const rightmostValueAtDepth = new Map<number, number>();
  const nodeStack: (TreeNode | null)[] = [root];
  const depthStack: number[] = [0];
  let maxDepth = -1;
  while (nodeStack.length) {
    const node = nodeStack.pop()!;
    const depth = depthStack.pop()!;
    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      // 如果不存在对应深度的节点才插入
      if (!rightmostValueAtDepth.has(depth)) {
        rightmostValueAtDepth.set(depth, node.val);
      }
      // 入栈时先左后右，出栈（访问）时先右后左
      nodeStack.push(node.left);
      nodeStack.push(node.right);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }
  const ret: number[] = [];
  for (let depth = 0; depth <= maxDepth; depth++) {
    ret.push(rightmostValueAtDepth.get(depth)!);
  }
  return ret;
} */

// BFS
function rightSideView(root: TreeNode | null): number[] {
  // depth -> rightmost node.val
  const rightmostValueAtDepth = new Map<number, number>();
  const nodeQueue: (TreeNode | null)[] = [root];
  const depthQueue: number[] = [0];
  let maxDepth = -1;
  while (nodeQueue.length) {
    const node = nodeQueue.shift()!;
    const depth = depthQueue.shift()!;
    if (node) {
      maxDepth = Math.max(maxDepth, depth);
      // 由于每一层最后一个访问到的节点才是我们要的答案，因此不断更新对应深度的信息即可
      rightmostValueAtDepth.set(depth, node.val);
      nodeQueue.push(node.left);
      nodeQueue.push(node.right);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }
  const ret: number[] = [];
  for (let depth = 0; depth <= maxDepth; depth++) {
    ret.push(rightmostValueAtDepth.get(depth)!);
  }
  return ret;
}

// BFS
/* function rightSideView(root: TreeNode | null): number[] {
  const ret: number[] = [];
  if (root === null) {
    return ret;
  }
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const n = queue.length;
    ret.push(queue.at(-1).val);
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return ret;
} */
// @lc code=end
