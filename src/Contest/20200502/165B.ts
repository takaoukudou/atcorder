const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  let input = Number(lines[0]);

  let tmp: number = 100;
  let count = 0;
  while (true) {
    count++;
    tmp = Math.floor(tmp * 1.01);
    if (tmp >= input) {
      console.log(count);
      return;
    }
  }
});
