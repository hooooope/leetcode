/*
 * @lc app=leetcode.cn id=1172 lang=typescript
 *
 * [1172] 餐盘栈
 */

// @lc code=start
// 数组+有序集合模拟
class DinnerPlates {
  // 用数组top记录每个栈的栈顶元素在栈中的位置
  top: number[] = [];
  // 用一个数组stack来模拟栈，编号为index的栈的顶部stackTop在数组中的下标pos可以通过公式来表示：
  // pos = index * capacity + stackTop
  stack: number[] = [];
  // 用一个有序集合poppedPos来保存被方法popAtStack删除的位置
  poppedPos = new TreeSet();
  constructor(public capacity: number) {}

  push(val: number): void {
    if (this.poppedPos.size === 0) {
      // 如果为空，则往stack后追加
      const pos = this.stack.length;
      this.stack.push(val);
      // 更新top
      if (pos % this.capacity === 0) {
        this.top.push(0);
      } else {
        const stackPos = this.top.length - 1;
        const stackTop = this.top[stackPos];
        this.top.splice(stackPos, 1, stackTop + 1);
      }
    } else {
      // 执行push时，先考虑popedPos中的位置，如果非空，则找出最小的位置，把元素push到这个位置
      const pos = this.poppedPos.pollFirst()!;
      this.stack.splice(pos, 1, val);
      // 更新top
      const index = Math.floor(pos / this.capacity);
      const stackTop = this.top[index];
      this.top.splice(index, 1, stackTop + 1);
    }
  }

  pop(): number {
    // stack末尾元素可能早已被popAtStack删除
    // 因此，应该返回处于stack末尾且不位于popAtStack中的位置
    // 如果stack末尾位置出现在popAtStack中，直接把stack末尾元素删除
    // 再进行重复判断，直到满足上述条件或者stack为空
    while (
      this.stack.length !== 0 &&
      this.poppedPos.has(this.stack.length - 1)
    ) {
      this.stack.splice(this.stack.length - 1, 1);
      const pos = this.poppedPos.pollLast()!;
      if (pos % this.capacity === 0) {
        this.top.splice(this.top.length - 1, 1);
      }
    }
    if (this.stack.length === 0) {
      return -1;
    } else {
      // 找到符合条件的位置后，需要更新top，然后返回元素的值
      const pos = this.stack.length - 1;
      const val = this.stack[pos];
      this.stack.splice(pos, 1);
      const index = this.top.length - 1;
      if (pos % this.capacity === 0) {
        this.top.splice(index, 1);
      } else {
        this.top.splice(index, 1, index - 1);
      }
      return val;
    }
  }

  popAtStack(index: number): number {
    // 栈为空时，返回-1
    if (index >= this.top.length) {
      return -1;
    }
    // 先找出这个栈现在的栈顶位置
    const stackTop = this.top[index];
    if (stackTop < 0) {
      return -1;
    }
    // 然后把这个位置的元素的下标计算出来并更新栈顶位置
    this.top.splice(index, 1, stackTop - 1);
    const pos = index * this.capacity + stackTop;
    // 把下标放入poppedPos，返回元素的值
    this.poppedPos.add(pos);
    return this.stack[pos];
  }
}

class TreeSet {
  set = new Set<number>();
  array = new Array<number>();
  constructor(public comparator = (a: number, b: number) => a - b) {}

  add(item: number) {
    if (!this.set.has(item)) {
      this.set.add(item);
      this.array.push(item);
      this.array.sort(this.comparator);
    }
  }

  delete(item: number) {
    if (this.set.has(item)) {
      this.set.delete(item);
      this.array.splice(this.array.indexOf(item), 1);
    }
  }

  has(item: number) {
    return this.set.has(item);
  }

  get size() {
    return this.set.size;
  }

  pollFirst() {
    const item = this.array.shift();
    if (item === undefined) {
      return item;
    }
    this.set.delete(item);
    return item;
  }

  pollLast() {
    const item = this.array.pop();
    if (item === undefined) {
      return item;
    }
    this.set.delete(item);
    return item;
  }
}
/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
// @lc code=end
