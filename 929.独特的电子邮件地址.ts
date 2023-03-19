/*
 * @lc app=leetcode.cn id=929 lang=typescript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/* function numUniqueEmails(emails: string[]): number {
  const set = new Set<string>();
  for (const email of emails) {
    let s = "";
    for (let i = 0; i < email.length; i++) {
      const c = email[i];
      if (c === "@") {
        s += email.slice(i);
        break;
      } else if (c === ".") {
        continue;
      } else if (c === "+") {
        while (email[i + 1] !== "@") {
          i++;
        }
      } else {
        s += c;
      }
    }
    set.add(s);
  }
  return set.size;
} */

function numUniqueEmails(emails: string[]): number {
  const set = new Set<string>();
  for (const email of emails) {
    const i = email.indexOf("@");
    let local = email.slice(0, i).split("+")[0];
    local = local.replace(/\./g, "");
    set.add(local + email.slice(i));
  }
  return set.size;
}
// @lc code=end
