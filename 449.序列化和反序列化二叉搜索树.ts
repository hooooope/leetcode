/*
 * @lc app=leetcode.cn id=449 lang=typescript
 *
 * [449] 序列化和反序列化二叉搜索树
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

// 二叉树的通解
/* // Encodes a tree to a single string.
function serialize(root: TreeNode | null): string {
  if (root === null) {
    return "#_";
  }
  let ret = root.val + "_";
  ret += serialize(root.left);
  ret += serialize(root.right);
  return ret;
}
// Decodes your encoded data to tree.
function deserialize(data: string): TreeNode | null {
  const process = (queue: string[]): TreeNode | null => {
    const val = queue.shift();
    if (val === "#") {
      return null;
    }
    return new TreeNode(Number(val), process(queue), process(queue));
  };
  const queue = data.slice(0, -1).split("_");
  return process(queue);
} */

// 二叉搜索树的特解（后序遍历）
/* // Encodes a tree to a single string.
function serialize(root: TreeNode | null): string {
  const list: number[] = [];
  const postOrder = (root: TreeNode | null) => {
    if (root === null) {
      return root;
    }
    postOrder(root.left);
    postOrder(root.right);
    list.push(root.val);
  };
  postOrder(root);
  return list.join(",");
}
// Decodes your encoded data to tree.
function deserialize(data: string): TreeNode | null {
  if (data.length === 0) {
    return null;
  }
  const construct = (lower: number, upper: number, stack: number[]) => {
    if (
      stack.length === 0 ||
      stack[stack.length - 1] < lower ||
      stack[stack.length - 1] > upper
    ) {
      return null;
    }
    const val = stack.pop()!;
    const root = new TreeNode(val);
    root.right = construct(val, upper, stack);
    root.left = construct(lower, val, stack);
    return root;
  };
  const list = data.split(",");
  const stack: number[] = [];
  for (const val of list) {
    stack.push(Number(val));
  }
  return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, stack);
} */

// 二叉搜索树的特解（先序遍历）
// Encodes a tree to a single string.
function serialize(root: TreeNode | null): string {
  const list: number[] = [];
  const preOrder = (root: TreeNode | null) => {
    if (root === null) {
      return root;
    }
    list.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);
  return list.join(",");
}
// Decodes your encoded data to tree.
function deserialize(data: string): TreeNode | null {
  if (data.length === 0) {
    return null;
  }
  const construct = (lower: number, upper: number, queue: number[]) => {
    if (queue.length === 0 || queue[0] < lower || queue[0] > upper) {
      return null;
    }
    const val = queue.shift()!;
    const root = new TreeNode(val);
    root.left = construct(lower, val, queue);
    root.right = construct(val, upper, queue);
    return root;
  };
  const list = data.split(",");
  const queue: number[] = [];
  for (const val of list) {
    queue.push(Number(val));
  }
  return construct(-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, queue);
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
