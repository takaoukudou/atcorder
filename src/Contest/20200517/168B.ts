const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const num = Number(lines.shift());
  const str = lines.shift();

  if (str.length <= num) {
    console.log(str);
    return;
  }

  console.log(str.substr(0, num) + "...");
});
