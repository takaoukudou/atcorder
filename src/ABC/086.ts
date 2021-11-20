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
  const a = +input[0];
  const b = +input[1];

  const res = (a * b) % 2 === 0 ? "Even" : "Odd";

  console.log(res);
});
