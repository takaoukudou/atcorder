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
  const input2 = lines.shift();
  if (input.length + 1 === input2.length && input2.indexOf(input) === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});
