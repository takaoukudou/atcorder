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
  const type = rule[1];

  const data: any = lines.map((line) => {
    return line.split(" ").map((int) => parseInt(int));
  });

  console.log();
});
