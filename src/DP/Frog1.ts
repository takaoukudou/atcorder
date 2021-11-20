const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

let dp: any;
let inputSize;

//数字の配列
let input: any = [];

reader.on("close", function () {
  inputSize = Number(lines[0]);
  input = lines[1].split(" ").map(Number);

  dp = input.map(() => {
    return Infinity;
  });

  dp[0] = 0;

  for (let i = 1; i < inputSize; i++) {
    if (i > 0) {
      dp[i] = Math.min(dp[i], dp[i - 1] + abs(input[i - 1] - input[i]));
    }
    if (i > 1) {
      dp[i] = Math.min(dp[i], dp[i - 2] + abs(input[i - 2] - input[i]));
    }
  }
  console.log(dp[inputSize - 1]);
});

function abs(val: number) {
  return val < 0 ? -val : val;
}
