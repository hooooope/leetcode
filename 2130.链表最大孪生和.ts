/*
 * @lc app=leetcode.cn id=2130 lang=typescript
 *
 * [2130] 链表最大孪生和
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

function pairSum(head: ListNode): number {
  let ret = 0;
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  const reverse = (head: ListNode) => {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;
    let next: ListNode | null = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };
  fast = reverse(slow.next!);
  slow = head;
  while (fast) {
    ret = Math.max(ret, slow.val + fast.val);
    slow = slow.next!;
    fast = fast.next;
  }
  return ret;
}
// @lc code=end
