const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = lines.shift();
  const res = input === "ABC" ? "ARC" : "ABC";
  console.log(res);
});
