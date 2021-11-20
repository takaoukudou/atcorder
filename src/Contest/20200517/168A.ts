const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = Number(lines.shift());

  const amari = input % 10;

  if (amari === 3) {
    console.log("bon");
  } else if (amari === 0 || amari === 1 || amari === 6 || amari === 8) {
    console.log("pon");
  } else {
    console.log("hon");
  }
});
