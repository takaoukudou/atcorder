const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = Number(lines[0]);

  //数字の配列
  const inputs = lines[1].split(" ").map(Number);

  for (let i = inputs[0]; i <= inputs[1]; i++) {
    if (i % input === 0) {
      console.log("OK");
      return;
    }
  }

  console.log("NG");
});
