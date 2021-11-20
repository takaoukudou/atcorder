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
  const valueMax = 1000010;
  // const valueMax = 3;

  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  const dp = [];
  for (let i = 0; i < itemNum; ++i) {
    for (let j = 0; j < valueMax; ++j) {
      if (j === 0) dp[i] = [Infinity];
      dp[i].push(Infinity);
    }
  }
  dp[0][0] = 0;

  for (let i = 0; i < itemNum; ++i) {
    for (let v = 0; v < valueMax; ++v) {
      if (v - data[i][1] >= 0) {
        dp[i + 1][v] = Math.min(
          dp[i + 1][v],
          dp[i][v - data[i][1]] + data[i][0]
        );
      }
      dp[i + 1][v] = Math.min(dp[i + 1][v], dp[i][v]);
    }
  }

  let res;
  for (let i = 0; i < valueMax; ++i) {
    if (dp[itemNum][i] <= weightMax) res = i;
  }

  console.log(res);
});
