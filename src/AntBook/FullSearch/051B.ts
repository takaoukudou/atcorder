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
  const K = rule[0];
  const S = rule[1];
  let count = 0;

  for (let i = 0; i <= K; i++) {
    for (let j = 0; j <= K; j++) {
      if (S - i - j >= 0 && S - i - j <= K) {
        count++;
      }
    }
  }

  console.log(count);
});
