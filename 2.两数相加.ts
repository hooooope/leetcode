/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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
// Wrong！链表过长时，加法结果溢出
/* function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const getNum = (l: ListNode) => {
    let num = 0;
    let i = 0;
    while (l) {
      num += l.val * 10 ** i;
      l = l.next;
      i++;
    }
    return num;
  };
  const setNum = (l: ListNode, num: number) => {
    if (num === 0) {
      l.next = new ListNode(num);
    }
    while (num) {
      l.next = new ListNode(num % 10);
      l = l.next;
      num = Math.floor(num / 10);
    }
  };
  const num1 = getNum(l1);
  const num2 = getNum(l2);
  const num3 = num1 + num2;
  const l3 = new ListNode();
  setNum(l3, num3);
  return l3.next;
} */

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head = null;
  let tail: ListNode | null = null;
  let carry = 0; // 进位信息
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
}
// @lc code=end
