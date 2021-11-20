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
  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  const dp = [];
  dp.push(data[0]);
  for (let i = 1; i < rule[0]; i++) {
    dp.push(new Array(3).fill(-1));
  }

  for (let i = 1; i < rule[0]; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (j !== k) {
          dp[i][k] = Math.max(dp[i][k], dp[i - 1][j] + data[i][k]);
        }
      }
    }
  }
  console.log(Math.max.apply(null, dp[rule[0] - 1]));
});
