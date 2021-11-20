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
  const shokou = rule[0];
  const kouhi = rule[1];
  const target = rule[2];

  let res: any = shokou * Math.pow(kouhi, target - 1);

  if (res > Math.pow(10, 9)) res = "large";
  console.log(res);
});
