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
  const data: number[] = lines
    .shift()
    .split(" ")
    .map((int) => parseInt(int));

  const dp = new Array(data.length).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < rule[0]; i++) {
    for (let j = i - rule[1]; j < i; j++) {
      if (j >= 0) {
        dp[i] = Math.min(dp[i], dp[j] + abs(data[j] - data[i]));
      }
    }
  }

  console.log(dp[rule[0] - 1]);
});

function abs(val: number) {
  return val < 0 ? -val : val;
}
