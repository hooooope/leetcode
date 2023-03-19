/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
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

// DFS
/* function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let ret = false;
  const travel = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    if (isSameTree(root, subRoot)) {
      ret = true;
      return;
    }
    travel(root.left);
    travel(root.right);
  };
  const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p && !q) {
      return true;
    } else if (!p || !q) {
      return false;
    } else if (p.val !== q.val) {
      return false;
    } else {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
  };
  travel(root);
  return ret;
} */

// DFS
/* function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  const isSameTree = (p: TreeNode | null, q: TreeNode | null) => {
    if (!p && !q) {
      return true;
    } else if (!p || !q) {
      return false;
    } else if (p.val !== q.val) {
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  };
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
} */

// KMP
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // 两棵树的先序遍历序列，包含null节点
  // 用树中的最大值+1表示左null值
  // 用树中的最大值+2表示右null值
  const rOrder: number[] = [];
  const sOrder: number[] = [];
  let maxElement = -Number.MAX_VALUE;
  const getMaxElement = (t: TreeNode | null) => {
    if (t === null) {
      return;
    }
    maxElement = Math.max(maxElement, t.val);
    getMaxElement(t.left);
    getMaxElement(t.right);
  };
  getMaxElement(root);
  getMaxElement(subRoot);
  const lNull = maxElement + 1;
  const rNull = maxElement + 2;
  const getDfsOrder = (t: TreeNode | null, tar: number[]) => {
    if (t === null) {
      return;
    }
    tar.push(t.val);
    if (t.left !== null) {
      getDfsOrder(t.left, tar);
    } else {
      tar.push(lNull);
    }
    if (t.right !== null) {
      getDfsOrder(t.right, tar);
    } else {
      tar.push(rNull);
    }
  };
  getDfsOrder(root, rOrder);
  getDfsOrder(subRoot, sOrder);
  const kmp = () => {
    const getNext = (s: number[]) => {
      const n = s.length;
      const ret: number[] = new Array(n).fill(0);
      ret[0] = -1;
      ret[1] = 0;
      let i = 2;
      let cn = 0;
      while (i < n) {
        if (s[i - 1] === s[cn]) {
          ret[i++] = ++cn;
        } else if (cn > 0) {
          cn = ret[cn];
        } else {
          ret[i++] = 0;
        }
      }
      return ret;
    };
    const next = getNext(sOrder);
    let i1 = 0;
    let i2 = 0;
    while (i1 < rOrder.length && i2 < sOrder.length) {
      if (rOrder[i1] === sOrder[i2]) {
        i1++;
        i2++;
      } else if (next[i2] === -1) {
        i1++;
      } else {
        i2 = next[i2];
      }
    }
    return i2 === sOrder.length ? i1 - i2 : -1;
  };
  return kmp() !== -1;
}

// @lc code=end
