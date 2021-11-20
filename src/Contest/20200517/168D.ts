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
  const cityNum = rule[0];
  const telepoNum: any = BigInt(rule[1]);

  const cityArray = lines.shift().split(" ").map(Number);

  const pattern: any = [];

  let now = 1;
  let next = cityArray[now];
  let hitNum: any;

  while (true) {
    pattern.push(now);
    next = cityArray[now - 1];

    if (pattern.includes(next)) {
      hitNum = BigInt(pattern.indexOf(next));
      pattern.splice(0, hitNum);
      // console.log(hitNum);
      break;
    }
    now = next;
  }
  console.log(telepoNum - hitNum);
  let res = (telepoNum - hitNum) % pattern.length;
  console.log(res);

  console.log(pattern);
});
