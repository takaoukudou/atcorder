const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on("line", function (line) {
  lines.push(line);
});
reader.on("close", function () {
  const fiveHanYenNum = lines[0] as number;
  const oneHanYenNum = lines[1] as number;
  const fiftyYenNum = lines[2] as number;
  const applyYen = lines[3] as number;

  console.log(countApply(fiveHanYenNum, oneHanYenNum, fiftyYenNum, applyYen));
});

function countApply(
  fiveHanYenNum: number,
  oneHanYenNum: number,
  fiftyYenNum: number,
  applyYen: number
): number {
  let count = 0;

  for (let i = 0; i <= fiveHanYenNum; i++) {
    for (let j = 0; j <= oneHanYenNum; j++) {
      for (let k = 0; k <= fiftyYenNum; k++) {
        if (500 * i + 100 * j + k * 50 == applyYen) count = count + 1;
      }
    }
  }

  return count;
}
