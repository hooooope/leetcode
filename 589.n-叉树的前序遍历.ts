/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

// 递归
/* function preorder(root: Node | null): number[] {
  const ret: number[] = [];
  const travel = (root: Node | null) => {
    if (!root) {
      return;
    }
    ret.push(root.val);
    for (const child of root.children) {
      travel(child);
    }
  };
  travel(root);
  return ret;
} */

// 迭代
/* function preorder(root: Node | null): number[] {
  const stk: Node[] = [];
  const ret: number[] = [];
  const nextIndex = new Map<Node, number>();
  let node = root;
  while (node || stk.length) {
    while (node) {
      stk.push(node);
      ret.push(node.val);
      if (!node.children.length) {
        break;
      }
      nextIndex.set(node, 1);
      node = node.children[0];
    }
    node = stk[stk.length - 1];
    const i = nextIndex.get(node)!;
    if (i < node.children.length) {
      nextIndex.set(node, i + 1);
      node = node.children[i];
    } else {
      stk.pop();
      nextIndex.delete(node);
      node = null;
    }
  }
  return ret;
} */

// 迭代优化
function preorder(root: Node | null): number[] {
  if (!root) {
    return [];
  }
  const stk: Node[] = [];
  const ret: number[] = [];
  stk.push(root);
  while (stk.length) {
    const node = stk.pop()!;
    ret.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stk.push(node.children[i]);
    }
  }
  return ret;
}
// @lc code=end
