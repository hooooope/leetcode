/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

/* export {};

class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
} */

// 迭代+哈希表
/* function copyRandomList(head: Node | null): Node | null {
  // oldNode -> newNode
  const map = new Map<Node, Node>();
  const dummyHead = new Node();
  let oldCur = head;
  let newCur = dummyHead;
  while (oldCur) {
    if (!map.has(oldCur)) {
      map.set(oldCur, new Node(oldCur.val));
    }
    if (oldCur.random && !map.has(oldCur.random)) {
      map.set(oldCur.random, new Node(oldCur.random.val));
    }
    newCur.next = map.get(oldCur)!;
    if (oldCur.random) {
      newCur.next.random = map.get(oldCur.random)!;
    }
    newCur = newCur.next;
    oldCur = oldCur.next;
  }
  return dummyHead.next;
} */

// 迭代+节点拆分
function copyRandomList(head: Node | null): Node | null {
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = new Node(cur.val, next!);
    cur = next;
  }
  cur = head;
  while (cur) {
    cur.next!.random = cur.random ? cur.random.next : null;
    cur = cur.next!.next;
  }
  const newHead = head?.next ?? null;
  cur = head;
  while (cur) {
    const newNode = cur.next!;
    const next = newNode.next;
    newNode.next = newNode.next?.next ?? null;
    cur.next = next;
    cur = next;
  }
  return newHead;
}
// @lc code=end
