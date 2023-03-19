/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const reverse = (head: ListNode | null) => {
    let prev: ListNode | null = null;
    let next: ListNode | null = null;
    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  };
  const tail1 = reverse(l1);
  const tail2 = reverse(l2);
  let head = new ListNode();
  let cur = head;
  let cur1 = tail1;
  let cur2 = tail2;
  let carry = 0;
  while (cur1 || cur2) {
    const val1 = cur1?.val ?? 0;
    const val2 = cur2?.val ?? 0;
    cur.next = new ListNode((val1 + val2 + carry) % 10);
    carry = Math.floor((val1 + val2 + carry) / 10);
    cur = cur.next;
    cur1 && (cur1 = cur1.next);
    cur2 && (cur2 = cur2.next);
  }
  if (carry) {
    cur.next = new ListNode(carry);
  }
  head = reverse(head.next);
  return head;
}
// @lc code=end
