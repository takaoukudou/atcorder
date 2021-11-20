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
  const a = BigInt(rule[0]);
  const intB = rule[1] * 100;

  const b = BigInt(intB);

  let res = a * b;
  console.log(res / BigInt(100));
});
