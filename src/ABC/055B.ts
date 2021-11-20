const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = lines[0];
  let res = 1;

  for (let i = Number(input); i > 1; i--) {
    res = (res * i) % 1000000007;
  }

  console.log(res);
});
