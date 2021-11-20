const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = (lines[0] as string).split(" ");
  const hNum = Number(input[0]);
  const wNum = Number(input[1]);

  console.log(wNum >= hNum ? "unsafe" : "safe");
});
