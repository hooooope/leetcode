/*
 * @lc app=leetcode.cn id=590 lang=typescript
 *
 * [590] N 叉树的后序遍历
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
/* function postorder(root: Node | null): number[] {
  const ret: number[] = [];
  const travel = (root: Node | null) => {
    if (!root) {
      return;
    }
    for (const child of root.children) {
      travel(child);
    }
    ret.push(root.val);
  };
  travel(root);
  return ret;
} */

// 迭代
/* function postorder(root: Node | null): number[] {
  const ret: number[] = [];
  const stk: Node[] = [];
  const nextIndex = new Map<Node, number>();
  let node = root;
  while (node || stk.length) {
    while (node) {
      stk.push(node);
      nextIndex.set(node, 1);
      node = node.children[0];
    }
    node = stk[stk.length - 1];
    const i = nextIndex.get(node)!;
    if (i < node.children.length) {
      nextIndex.set(node, i + 1);
      node = node.children[i];
    } else {
      nextIndex.delete(node);
      ret.push(node.val);
      stk.pop();
      node = null;
    }
  }
  return ret;
} */

// 迭代优化
/* function postorder(root: Node | null): number[] {
  if (!root) {
    return [];
  }
  const stk: Node[] = [];
  const ret: number[] = [];
  const visited = new Set<Node>();
  stk.push(root);
  while (stk.length) {
    const node = stk[stk.length - 1];
    const children = node.children;
    if (children.length === 0 || visited.has(node)) {
      stk.pop();
      ret.push(node.val);
    } else {
      for (let i = children.length - 1; i >= 0; i--) {
        stk.push(children[i]);
      }
    }
    visited.add(node);
  }
  return ret;
} */

// 利用前序遍历反转
/* 
  当前节点为u，它的从左至右子节点依次为v1,v2,v3时，
  前序遍历结果为: [u, v1, children(v1), v2, children(v2),v3, children(v3)]
  后序遍历结果为: [children(v1), v1, children(v2), v2, children(v3), v3, u]
  将前序遍历中子树的访问顺序改为从右向左可以得到：
  [u, v3, children(v3), v2, children(v2), v1, children(v1)]
  将上述的结果进行反转，得到：
  [children(v1), v1, children(v2), v2, children(v3), v3, u]
  刚好与后续遍历的结果相同
*/
function postorder(root: Node | null): number[] {
  if (!root) {
    return [];
  }
  const stk: Node[] = [];
  const ret: number[] = [];
  stk.push(root);
  while (stk.length) {
    const node = stk.pop();
    ret.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      stk.push(node.children[i]);
    }
  }
  ret.reverse();
  return ret;
}
// @lc code=end
