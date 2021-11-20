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
  const num = rule[0];
  const yen = rule[1];
  let count = 0;

  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      if (i + j > num) break;
      const k = num - i - j;

      const sum = i * 10000 + j * 5000 + k * 1000;

      if (sum === yen) {
        console.log(i, j, k);
        return;
      }
    }
  }

  console.log(-1, -1, -1);
});
