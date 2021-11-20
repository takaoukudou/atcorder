const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const i1 = lines.shift();
  const i2 = lines.shift();

  if (i1 === i2) {
    console.log("same");
    return;
  } else if (i1.toUpperCase() === i2.toUpperCase()) {
    console.log("case-insensitive");
    return;
  } else {
    console.log("different");
    return;
  }
});
