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
  const itemNum = rule[0];
  const weightMax = rule[1];

  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  const dp = [];
  dp.push(new Array(weightMax + 1).fill(0));
  for (let i = 0; i < itemNum; i++) {
    dp.push(new Array(weightMax + 1).fill(-1));
  }

  for (let i = 0; i < itemNum; i++) {
    for (let w = 0; w <= weightMax; w++) {
      if (w - data[i][0] >= 0) {
        dp[i + 1][w] = Math.max(
          dp[i + 1][w],
          dp[i][w - data[i][0]] + data[i][1]
        );
      }
      dp[i + 1][w] = Math.max(dp[i + 1][w], dp[i][w]);
    }
  }

  console.log(Math.max.apply(null, dp[itemNum]));
});
