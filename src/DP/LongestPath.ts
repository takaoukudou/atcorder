const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

const rule = lines.shift().split(" ").map(Number);
const node = rule[0];
const edge = rule[1];
let dp = [node];
dp.fill(-1);

reader.on("close", function () {
  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  console.log(dp);
});

function rec(v) {
  if (dp[v] != -1) return dp[v];

  let res = 0;
}
