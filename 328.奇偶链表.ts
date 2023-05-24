/*
 * @lc app=leetcode.cn id=328 lang=typescript
 *
 * [328] 奇偶链表
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

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head;
  let even = evenHead;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = odd.next;
  }
  odd.next = evenHead;
  return head;
}
// @lc code=end
