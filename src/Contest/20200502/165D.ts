const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const inputSize = lines[0] as string;

  //数字の配列
  // const input = lines[0].split("").map(Number);

  for (let i = 1; i < lines.length; i++) {
    const inputs = lines[i];
  }

  console.log();
});
