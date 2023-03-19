/*
 * @lc app=leetcode.cn id=1801 lang=typescript
 *
 * [1801] 积压订单中的订单总数
 */

// @lc code=start
class Heap<T> {
  array: T[] = [];
  constructor(public compare: (a: T, b: T) => boolean) {}
  size() {
    return this.array.length;
  }
  push(value: T) {
    const { array } = this;
    array.push(value);
    let index = array.length - 1;
    while (
      (index - 1) >> 1 >= 0 &&
      this.compare(array[(index - 1) >> 1], array[index])
    ) {
      this.swap(array, (index - 1) >> 1, index);
      index = (index - 1) >> 1;
    }
  }
  pop(): T | null {
    const { array } = this;
    const size = array.length;
    if (size === 0) {
      return null;
    }
    this.swap(array, 0, size - 1);
    const ret = array.pop()!;
    this.heapify(0);
    return ret;
  }
  peak(): T | null {
    const { array } = this;
    const size = array.length;
    if (size === 0) {
      return null;
    }
    return array[0];
  }
  heapify(index: number) {
    const { array } = this;
    const heapSize = array.length;
    let left = (index << 1) + 1;
    while (left < heapSize) {
      let mostPriority =
        left + 1 < heapSize && this.compare(array[left], array[left + 1])
          ? left + 1
          : left;
      mostPriority = this.compare(array[mostPriority], array[index])
        ? index
        : mostPriority;
      if (mostPriority === index) {
        break;
      }
      this.swap(array, mostPriority, index);
      index = mostPriority;
      left = (index << 1) + 1;
    }
  }
  swap(array: T[], i: number, j: number) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

type OrderType = [number, number, number];
function getNumberOfBacklogOrders(orders: OrderType[]): number {
  // 小根堆维护销售订单
  const sellHeap = new Heap<OrderType>((a, b) => a[0] - b[0] > 0);
  // 大根堆维护采购订单
  const buyHeap = new Heap<OrderType>((a, b) => b[0] - a[0] > 0);
  for (const order of orders) {
    if (order[2] === 0) {
      // 采购订单
      let sellOrder = sellHeap.peak();
      while (order[1] && sellOrder && sellOrder[0] <= order[0]) {
        const n = Math.min(sellOrder[1], order[1]);
        sellOrder[1] -= n;
        order[1] -= n;
        if (sellOrder[1] === 0) {
          sellHeap.pop();
          sellOrder = sellHeap.peak();
        }
      }
      if (order[1] !== 0) {
        buyHeap.push(order);
      }
    } else {
      // 销售订单
      let buyOrder = buyHeap.peak();
      while (order[1] && buyOrder && buyOrder[0] >= order[0]) {
        const n = Math.min(buyOrder[1], order[1]);
        buyOrder[1] -= n;
        order[1] -= n;
        if (buyOrder[1] === 0) {
          buyHeap.pop();
          buyOrder = buyHeap.peak();
        }
      }
      if (order[1] !== 0) {
        sellHeap.push(order);
      }
    }
  }
  let ret = 0;
  while (sellHeap.size()) {
    ret = ret + sellHeap.pop()![1];
  }
  while (buyHeap.size()) {
    ret = ret + buyHeap.pop()![1];
  }
  return ret % (10 ** 9 + 7);
}

// heap tese case
/* const nums: number[] = [];
let num: number; */
/* const smallHeap = new Heap<OrderType>((a, b) => a[0] - b[0] > 0);
for (let i = 0; i < 5; i++) {
  num = Math.floor(Math.random() * 11);
  nums.push(num);
  smallHeap.push([num, 0, 0]);
}
console.log(nums);
console.log(smallHeap.array.map((e) => e[0]));
num = smallHeap.pop()![0];
console.log(num);
console.log(smallHeap.array.map((e) => e[0])); */
/* const bigHeap = new Heap<OrderType>((a, b) => b[0] - a[0] > 0);
for (let i = 0; i < 5; i++) {
  num = Math.floor(Math.random() * 11);
  nums.push(num);
  bigHeap.push([num, 0, 0]);
}
console.log(nums);
console.log(bigHeap.array.map((e) => e[0]));
num = bigHeap.pop()![0];
console.log(num);
console.log(bigHeap.array.map((e) => e[0])); */
// @lc code=end
