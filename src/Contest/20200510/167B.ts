const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const rule = lines.shift().split(" ").map(Number);
  const one = rule[0];
  const zero = rule[1];
  const minus = rule[2];
  let num = rule[3];

  let res = 0;
  num = num - one;

  if (num <= 0) {
    console.log(rule[3]);
    return;
  }

  num -= zero;
  if (num <= 0) {
    console.log(one);
    return;
  }

  console.log(one - num);
});
