const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line) {
  lines.push(line);
});

reader.on("close", function () {
  const input = (lines[0] as string).split(" ");
  const num = Number(input[0]);
  const sum = Number(input[1]);

  const res = matchPatterns(num, sum);

  console.log(res[2], res[1], res[0]);
});

function matchPatterns(num: number, sum: number): number[] {
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      const k = num - i - j;
      if (k >= 0 && i + j + k === num) {
        const tmp = 1000 * i + 5000 * j + 10000 * k;
        if (tmp === sum) {
          return [i, j, k];
        }
      }
    }
  }
  return [-1, -1, -1];
}
