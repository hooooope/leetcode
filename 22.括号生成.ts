/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
// 暴力法
/* function generateParenthesis(n: number): string[] {
  const valid = (s: string[]) => {
    let balance = 0;
    for (const c of s) {
      if (c === "(") {
        balance++;
      } else {
        balance--;
      }
      if (balance < 0) {
        return false;
      }
    }
    return balance === 0;
  };
  const generateAll = (current: string[], index: number, ret: string[]) => {
    if (index === current.length) {
      if (valid(current)) {
        ret.push(current.join(""));
      }
    } else {
      current[index] = "(";
      generateAll(current, index + 1, ret);
      current[index] = ")";
      generateAll(current, index + 1, ret);
    }
  };
  const ret: string[] = [];
  generateAll(new Array<string>(2 * n), 0, ret);
  return ret;
} */

// 回溯法
/* function generateParenthesis(n: number): string[] {
  // open：已出现的左括号数量
  // close：已出现的右括号数量
  // max：总的括号对数
  const backtrack = (
    ret: string[],
    cur: string[],
    open: number,
    close: number,
    max: number
  ) => {
    if (cur.length === max * 2) {
      ret.push(cur.join(""));
      return;
    }
    // 如果（已使用）左括号数量不大于n，我们可以放一个左括号
    if (open < max) {
      cur.push("(");
      backtrack(ret, cur, open + 1, close, max);
      cur.pop();
    }
    // 如果（已使用）右括号数量小于（已使用）左括号的数量，我们可以放一个右括号
    if (close < open) {
      cur.push(")");
      backtrack(ret, cur, open, close + 1, max);
      cur.pop();
    }
  };
  const ret: string[] = [];
  backtrack(ret, new Array<string>(), 0, 0, n);
  return ret;
} */

// 按括号序列的长度递归
// 任何一个括号序列都一定是由'('开头，并且第一个'('一定有一个唯一与之对应的‘)’
// 这样一来，每一个括号序列可以用(a)b来表示，其中a与b分别是一个合法的括号序列（可以为空）
function generateParenthesis(n: number): string[] {
  const cache: string[][] = new Array(100);
  // 生成所有可能的并且有效的n对括号组合
  const generate = (n: number) => {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    const ret: string[] = [];
    if (n === 0) {
      ret.push("");
    } else {
      // 枚举与第一个'('对应的')'的位置2i+1
      for (let i = 0; i < n; i++) {
        // 第一个'('对应的')'的位置是2i+1，则括号序列a有i对括号
        // 递归调用generate(i)即可计算a的所有可能性
        for (const left of generate(i)) {
          // 第一个'('对应的')'的位置是2i+1，则括号序列b有n - i - 1对括号
          // 递归调用generate(n - i - 1)即可计算b的所有可能性
          for (const right of generate(n - i - 1)) {
            ret.push("(" + left + ")" + right);
          }
        }
      }
    }
    // 为了节省计算时间，我们在每次generate(i)函数返回之前，把返回值存储起来
    // 下次再调用generate(i)时可以直接返回，不需要再递归计算
    cache[n] = ret;
    return ret;
  };
  return generate(n);
}
// @lc code=end
