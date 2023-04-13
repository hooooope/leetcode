/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/* class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
} */

// 计算链表长度（两次遍历）
/* function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let len = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    len++;
  }
  // 第len-n个节点为需要被删除的节点
  // 需要删除第一个节点
  if (len - n === 0) {
    return head.next;
  }
  // 循环结束后指向删除节点的前一个节点
  cur = head;
  // 第len-n-1个节点为需要被删除节点的前一个节点
  for (let i = 0; i < len - n - 1; i++) {
    cur = cur!.next;
  }
  cur!.next = cur!.next?.next ?? null;
  return head;
} */

// 栈（两次遍历）
/* function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const stack: ListNode[] = [];
  let cur = head;
  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  const pre = stack.pop();
  if (pre) {
    pre.next = pre.next?.next ?? null;
  } else {
    // 需要删除第一个节点
    head = head?.next ?? null;
  }
  return head;
} */

// 快慢指针（一次遍历）
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return head;
  }
  let first: ListNode | null = head;
  let second: ListNode | null = head;
  // first指针先移动n+1步
  for (let i = 0; i < n + 1; i++) {
    // 需要删除第一个节点
    if (first === null) {
      return head.next;
    }
    first = first.next;
  }
  // first和second指针同时移动
  // 当first指向null时，second指向被删除节点的前一个节点
  while (first) {
    first = first.next;
    second = second!.next;
  }
  second!.next = second!.next!.next;
  return head;
}
// @lc code=end
