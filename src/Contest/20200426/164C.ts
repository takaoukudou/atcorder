const lines: string[] = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", function (line: string) {
  lines.push(line);
});

reader.on("close", function () {
  const input = lines[0] as string;

  const length = input.length;
  const lastStart = length - 4;

  if (length < 4) {
    console.log(0);
    return;
  }

  let count = 0;

  for (let i = 0; i <= lastStart; i++) {
    for (let j = i + 4; j <= length; j++) {
      if (Number(input.substr(i, j)) % 2019 === 0) {
        count++;
      }
    }
  }
  console.log(count);
});
